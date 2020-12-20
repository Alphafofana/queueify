/**
 ********************************************************************************
 * @file Data Model class for Queueify.
 * @author Ella Soderberg, Alpha Fofana, Marta Hansbo, Laila Arman
 * @version 1.0
 ********************************************************************************
 */
import firebase from "firebase/app"; //TODO: Need this import?
import { auth, db } from "./services/firebase";
import DataSource from "./dataSource";
const crypto = require("crypto");

class QueueifyModel {
	constructor(
		currentSession = "",
		currentSessionName = "",
		currentSessionPin = "",
		currentPlaylistID = "",
		subscribers = []
	) {
		this.currentSession = currentSession;
		this.currentSessionName = currentSessionName;
		this.currentSessionPin = currentSessionPin;
		this.currentPlaylistID = currentPlaylistID;
		this.subscribers = subscribers;
		this.firebaseSubscription = false;
		this.saveToLocalStorage();
	}

	getModelProperty(prop) {
		return this[prop];
	}

	/**
	 * add observer/subscriber to the model
	 * @param  {callback} obs - callback function
	 */
	addObserver(obs) {
		if (!this.firebaseSubscription) {
			this.firebaseSubscription = this.firebaseSubscriber();
		}

		this.subscribers = this.subscribers.concat(obs);
		return () => this.removeObserver(obs);
	}
	/**
	 * remove observer/subscriber from the model
	 * @param  {callback} obs - callback function
	 */
	removeObserver(obs) {
		this.subscribers = this.subscribers.filter((o) => o !== obs);
		if (this.subscribers.length <= 1 && this.firebaseSubscription) {
			this.firebaseSubscription();
			this.firebaseSubscription = false;
		}
	}
	/**
	 * notify the models observers/subscribes
	 */
	notifyObservers() {
		if (this.subscribers)
			this.subscribers.forEach((callback) => {
				try {
					callback();
				} catch (err) {
					console.error("Error ", err, callback);
				}
			});
	}
	/**
	 * Add localStorage observer to Subscribe to the Model
	 */
	saveToLocalStorage() {
		this.subscribers.push(() => {
			localStorage.setItem(
				"queueifyModel",
				JSON.stringify({
					//Conversion from object to String (serialization)
					currentSession: this.currentSession,
					currentSessionName: this.currentSessionName,
					currentSessionPin: this.currentSessionPin,
					currentPlaylistID: this.currentPlaylistID,
				})
			);
		});
	}

	//TODO: Do we want this in the DataSource?
	createSession(sessionName, sessionPin) {
		const sessionID = crypto
			.createHash("sha1")
			.update(sessionName + sessionPin)
			.digest("hex");

		const session = db.collection("session").doc(sessionID);
		const user = db.collection("users").doc(auth.currentUser.uid);

		// Get a new write batch
		var batch = db.batch();
		return user
			.get()
			.then((user) => user.data().spotifyToken)
			.then((spotifyToken) => {
				batch.set(session, {
					hostToken: spotifyToken,
					hostUid: auth.currentUser.uid,
					name: sessionName,
					pin: sessionPin,
					totalVotes: 0,
				});

				return DataSource.createPlaylist(
					auth.currentUser.uid.split(":")[1],
					sessionName,
					spotifyToken
				);
			})
			.then((playlist) => {
				batch.update(session, {
					playlistId: playlist.id,
				});
				this.currentSession = sessionID;
				this.currentSessionName = sessionName;
				this.currentSessionPin = sessionPin;
				this.currentPlaylistID = playlist.id;
				this.notifyObservers();
			})
			.then(() => {
				return batch.commit();
			})
			.catch((error) => {
				//console.log("Failed to create session: ", error);
				throw new Error("Failed to create session" + error);
			});
	}

	joinSession(sessionName, sessionPin) {
		const sessionID = crypto
			.createHash("sha1")
			.update(sessionName + sessionPin)
			.digest("hex");

		// Prepare the database documents to update
		const session = db.collection("session").doc(sessionID);
		const user = db.collection("users").doc(auth.currentUser.uid);

		return session
			.update({
				//arrayUnion() adds elements to an array but only elements not already present.
				users: firebase.firestore.FieldValue.arrayUnion(
					auth.currentUser.uid
				),
			})
			.then(() => {
				const setUser = user.set(
					{ sessionID: sessionID },
					{ merge: true }
				);
				this.currentSession = sessionID;
				this.currentSessionName = sessionName;
				const getPlaylist = session
					.get()
					.then(
						(session) =>
							(this.currentPlaylistID = session.data().playlistId)
					);

				return Promise.all([setUser, getPlaylist]).then(() => {
					this.notifyObservers();
					return this.currentSession;
				});
			})
			.catch(function (error) {
				//console.log("Error getting document:", error);
				throw new Error("Failed to join session" + error);
			});
	}

	getCurrentPlaylist() {
		// Return the data about the playlist from firebase
		let playlist = [];
		return db
			.collection("session")
			.doc(this.currentSession)
			.collection(this.currentPlaylistID)
			.get()
			.then((res) =>
				res.forEach((doc) => {
					let song = doc.data();
					song.id = doc.id;
					playlist.push(song);
				})
			)
			.then(() => {
				playlist = playlist.sort((a, b) => this.sortPlaylist(a, b));
				return playlist;
			})
			.catch(function (error) {
				//console.log("Error getting playlist:", error);
				throw new Error("Failed to get playlist " + error);
			});
	}

	sortPlaylist(a, b) {
		if (a.votes === b.votes) {
			if (a.timestamp < b.timestamp) return -1;
			else if (a.timestamp > b.timestamp) return 1;
		} else if (a.votes > b.votes) return -1;
		else if (a.votes < b.votes) return 1;
		return 0;
	}

	addSong(songObj) {
		const { id: songID, artists: artistsObj, name: title } = songObj;
		const artists = artistsObj.map((artist) => artist.name);
		const song = db
			.collection("session")
			.doc(this.currentSession)
			.collection(this.currentPlaylistID)
			.doc(songID);

		return song
			.get()
			.then((doc) => {
				if (doc.exists) {
					throw new Error("song already exists!");
				} else {
					song.set({
						artist: artists,
						timestamp: new Date(),
						title: title,
						votes: 0,
					});
				}
			})
			.catch((error) => {
				console.error("Could not add song:", error);
				throw new Error(error);
			});
	}

	deleteSong(songID) {
		return db
			.collection("session")
			.doc(this.currentSession)
			.collection(this.currentPlaylistID)
			.doc(songID)
			.delete();
	}

	upVote(songID) {
		const song = db
			.collection("session")
			.doc(this.currentSession)
			.collection(this.currentPlaylistID)
			.doc(songID);
		const increment = firebase.firestore.FieldValue.increment(1);
		const user = firebase.firestore.FieldValue.arrayUnion(
			auth.currentUser.uid
		);
		return song
			.get()
			.then((doc) => {
				if (
					!doc.data().voters ||
					!doc.data().voters.includes(auth.currentUser.uid)
				) {
					song.update({
						votes: increment,
						voters: user,
					});
					// session.update({
					// 	totalVotes: increment,
					// });
				} else {
					throw new Error("already voted!");
				}
			})
			.catch((error) => {
				console.error("Could not vote:", error);
				throw new Error(error);
			});
	}

	firebaseSubscriber() {
		//const session = db.collection("session").doc(this.currentSession);
		const playlist = db
			.collection("session")
			.doc(this.currentSession)
			//TODO: Subscribe on session instead to ensure notifications
			.collection(this.currentPlaylistID);

		/* 		const sessionUnsub = session.onSnapshot(
			{
				// Listen for document metadata changes
				includeMetadataChanges: true,
			},
			(doc) => {
				console.log("onSnapshot, session: " + this.currentSession);
				this.notifyObservers();
			}
		); */
		const playlistUnsub = playlist.onSnapshot(
			{
				// Listen for document metadata changes
				includeMetadataChanges: false,
			},
			(doc) => {
				//console.log("onSnapshot: playlist: " + this.currentPlaylistID);
				this.notifyObservers();
			}
		);
		return () => {
			//sessionUnsub();
			playlistUnsub();
		};
	}
	/*
	Firebase functions will look for changes in playlists.
	If a song is added, the function will add this song to the playlist. 
	If a song has the order changed, the function will change the order of the playlist
	*/
	//TODO: Is this functionality needed for our MVP?
	//setCurrentSession(sessionName, sessionPin) {

	//TODO: Is this functionality needed for our MVP?
	//deleteSong(songID) {

	//TODO: Is this functionality needed for our MVP?
	//vote(songID) {
}

export default QueueifyModel;
