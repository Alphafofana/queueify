/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

const functions = require("firebase-functions");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const fetch = require("node-fetch");

// Firebase Setup
const admin = require("firebase-admin");
const serviceAccount = require("./service-account-dev.json");
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: `https://${process.env.GCLOUD_PROJECT}.firebaseio.com`,
});

// Spotify OAuth 2 setup
// TODO: Configure the `spotify.client_id` and `spotify.client_secret` Google Cloud environment variables.
const SpotifyWebApi = require("spotify-web-api-node");
const Spotify = new SpotifyWebApi({
	clientId: functions.config().spotify.client_id,
	clientSecret: functions.config().spotify.client_secret,
	redirectUri: `http://localhost:3000/login/popup`,
	//redirectUri: `https://test-queueify.herokuapp.com/login/popup`,
	//redirectUri: `https://queueify.herokuapp.com/login/popup`,
});

// Scopes to request.
const OAUTH_SCOPES = [
	"user-read-email",
	"playlist-modify-public",
	"playlist-modify-private",
	"user-read-currently-playing",
];

/**
 * Redirects the User to the Spotify authentication consent screen. Also the 'state' cookie is set for later state
 * verification.
 */
exports.redirect = functions.https.onRequest((req, res) => {
	cookieParser()(req, res, () => {
		const state =
			req.cookies.state || crypto.randomBytes(20).toString("hex");
		console.log("Setting verification state:", state);
		res.cookie("state", state.toString(), {
			maxAge: 3600000,
			secure: true,
			httpOnly: true,
		});
		const authorizeURL = Spotify.createAuthorizeURL(
			OAUTH_SCOPES,
			state.toString()
		);
		res.redirect(authorizeURL);
	});
});

/**
 * Exchanges a given Spotify auth code passed in the 'code' URL query parameter for a Firebase auth token.
 * The request also needs to specify a 'state' query parameter which will be checked against the 'state' cookie.
 * The Firebase custom auth token is sent back in a JSONP callback function with function name defined by the
 * 'callback' query parameter.
 */
exports.token = functions.https.onRequest((req, res) => {
	try {
		cookieParser()(req, res, () => {
			console.log("Received verification state:", req.cookies.state);
			console.log("Received state:", req.query.state);
			/* if (!req.cookies.state) {
				console.log(
					"State cookie not set or expired. Maybe you took too long to authorize. Please try again."
				);
				throw new Error(
					"State cookie not set or expired. Maybe you took too long to authorize. Please try again."
				);
			} else if (req.cookies.state !== req.query.state) {
				console.log("State validation failed");
				throw new Error("State validation failed");
			} */
			console.log("Received auth code:", req.query.code);
			Spotify.authorizationCodeGrant(req.query.code, (error, data) => {
				if (error) {
					throw error;
				}
				console.log(
					"Received Access Token:",
					data.body["access_token"]
				);
				Spotify.setAccessToken(data.body["access_token"]);

				Spotify.getMe(async (error, userResults) => {
					if (error) {
						throw error;
					}
					console.log(
						"Auth code exchange result received:",
						userResults
					);
					// We have a Spotify access token and the user identity now.
					const accessToken = data.body["access_token"];
					const spotifyUserID = userResults.body["id"];
					//const profilePic = userResults.body["images"][0]["url"];
					const userName = userResults.body["display_name"];
					const email = userResults.body["email"];

					// Create a Firebase account and get the Custom Auth Token.
					const firebaseToken = await createFirebaseAccount(
						spotifyUserID,
						userName,
						//profilePic,
						email,
						accessToken
					);
					// Serve an HTML page that signs the user in and updates the user profile.

					res.jsonp({ token: firebaseToken });
				});
			});
		});
	} catch (error) {
		return res.jsonp({ error: error.toString });
	}

	return null;
});

exports.addSong = functions.firestore
	.document("session/{sessionID}/{playlistID}/{songID}")
	.onCreate(async (snap, context) => {
		const session = context.params.sessionID;
		const playlist = context.params.playlistID;
		const song = context.params.songID;

		const token = admin
			.firestore()
			.collection("session")
			.doc(session)
			.get()
			.then((info) => info.data())
			.catch((err) => console.err("could not retrieve the token", err));

		let setToken = token.then((data) => {
			console.log(data);
			Spotify.setAccessToken(data.hostToken);
			return Spotify;
		});

		return setToken
			.then((Spotify) => {
				return Spotify.addTracksToPlaylist(playlist, [
					"spotify:track:" + song,
				]);
			})
			.catch((err) => console.error(err));
	});

exports.deleteSong = functions.firestore
	.document("session/{sessionID}/{playlistID}/{songID}")
	.onDelete(async (snap, context) => {
		const session = context.params.sessionID;
		const playlist = context.params.playlistID;
		const song = context.params.songID;

		const token = admin
			.firestore()
			.collection("session")
			.doc(session)
			.get()
			.then((info) => info.data())
			.catch((err) => console.err("could not retrieve the token", err));

		let setToken = token.then((data) => {
			Spotify.setAccessToken(data.hostToken);
			return Spotify;
		});

		return setToken
			.then((Spotify) => {
				return Spotify.removeTracksFromPlaylist(playlist, [
					{ uri: "spotify:track:" + song },
				]);
			})
			.catch((err) => console.error(err));
	});

exports.vote = functions.firestore
	.document("session/{sessionID}/{playlistID}/{songID}")
	.onUpdate(async (change, context) => {
		let songs = [];
		const playlist = context.params.playlistID;
		const session = context.params.sessionID;

		let songData = admin
			.firestore()
			.collection("session")
			.doc(session)
			.collection(playlist)
			.get()
			.then((res) =>
				res.forEach((doc) => {
					songs.push(doc);
				})
			);

		await songData.then(() => {
			songs = songs.sort((a, b) => sortSongs(a.data(), b.data()));
			return songs;
		});

		let songsString = "";

		songs.map(
			(song) =>
				(songsString = songsString + "spotify:track:" + song.id + ",")
		);
		songsString = songsString.substring(0, songsString.length - 1);

		const token = await admin
			.firestore()
			.collection("session")
			.doc(session)
			.get()
			.then((info) => info.data().hostToken)
			.catch((err) => console.err("could not retrieve the token", err));

		let call = await fetch(
			"https://api.spotify.com/v1/playlists/" +
				playlist +
				"/tracks?uris=" +
				songsString,
			{
				method: "PUT",
				headers: {
					Authorization: "Bearer " + token,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		).catch((err) => console.log(err));
		return call;
	});

function sortSongs(a, b) {
	if (a.votes === b.votes) {
		if (a.timestamp < b.timestamp) return -1;
		else if (a.timestamp > b.timestamp) return 1;
	} else if (a.votes > b.votes) return -1;
	else if (a.votes < b.votes) return 1;
	return 0;
}

/**
 * Creates a Firebase account with the given user profile and returns a custom auth token allowing
 * signing-in this account.
 * Also saves the accessToken to the firestore at /users/uid/spotifyToken
 *
 * @returns {Promise<string>} The Firebase custom auth token in a promise.
 */
async function createFirebaseAccount(
	spotifyID,
	displayName,
	//photoURL,
	email,
	accessToken
) {
	// The UID we'll assign to the user.
	const uid = `spotify:${spotifyID}`;

	// Save the access token to the Firebase Realtime Database.
	const databaseTask = admin.firestore().collection("users").doc(uid).set({
		spotifyToken: accessToken,
		userType: "host",
	});

	// Create or update the user account.
	const userCreationTask = admin
		.auth()
		.updateUser(uid, {
			displayName: displayName,
			//photoURL: photoURL,
			email: email,
			emailVerified: true,
		})
		.catch((error) => {
			// If user does not exists we create it.
			if (error.code === "auth/user-not-found") {
				return admin.auth().createUser({
					uid: uid,
					displayName: displayName,
					//photoURL: photoURL,
					email: email,
					emailVerified: true,
				});
			}
			throw error;
		});

	// Wait for all async tasks to complete, then generate and return a custom auth token.
	await Promise.all([userCreationTask, databaseTask]);
	// Create a Firebase custom auth token.
	const token = await admin.auth().createCustomToken(uid);
	console.log('Created Custom token for UID "', uid, '" Token:', token);
	return token;
}
