import { auth, db } from "./services/firebase";

const DataSource = {
	getToken() {
		let user = db.collection("users").doc(auth.currentUser.uid);
		return user
			.get()
			.then((doc) => {
				if (doc.exists) {
					return doc.data().spotifyToken;
				} else {
					console.log("The document does not exist.");
				}
			})
			.catch((error) => {
				console.log("Could not retrieve the document:", error);
			});
	},

	apiCall(endpoint, method, body, token) {
		return fetch(endpoint, {
			method: method,
			headers: {
				Authorization: "Bearer " + token,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: body ? JSON.stringify(body) : body,
		})
			.then((response) => {
				return response.json();
			})
			.catch((err) => console.error(err));
	},

	searchSong(query) {
		let endpoint =
			"https://api.spotify.com/v1/search?q=" + query + "&type=track";
		let method = "GET";
		return this.apiCall(endpoint, method).catch((error) => {
			console.error(error);
		});
	},

	getPlaylist(playlistID) {
		let endpoint = "https://api.spotify.com/v1/playlists/" + playlistID;
		let method = "GET";

		return this.apiCall(endpoint, method).catch((error) => {
			console.error(error);
		});
	},

	createPlaylist(userID, playlistName, token) {
		let endpoint =
			"https://api.spotify.com/v1/users/" + userID + "/playlists/";
		let method = "POST";
		let body = {
			name: playlistName,
			description: "Playlist for the queueify app",
			public: false,
		};
		return fetch(endpoint, {
			method: method,
			headers: {
				Authorization: "Bearer " + token,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: body ? JSON.stringify(body) : body,
		})
			.then((response) => {
				return response.json();
			})
			.catch((err) => console.error(err));
	},

	changePlaylistOrder(playlistID, songPosition, newSongPosition) {
		let endpoint =
			"https://api.spotify.com/v1/playlists/" + playlistID + "/tracks";
		let method = "PUT";
		let body = {
			range_start: songPosition,
			insert_before: newSongPosition,
		};

		return this.apiCall(endpoint, method, body).catch((error) => {
			console.error(error);
		});
	},

	deleteSong(playlistID, songID, songPosition) {
		let endpoint =
			"https://api.spotify.com/v1/playlists/" + playlistID + "/tracks";
		let method = "DELETE";
		let body = {
			tracks: [
				{
					uri: "spotify:track:" + songID,
					positions: [songPosition],
				},
			],
		};

		return this.apiCall(endpoint, method, body).catch((error) => {
			console.error(error);
		});
	},

	addSong(playlistID, songID) {
		let endpoint =
			"https://api.spotify.com/v1/playlists/" +
			playlistID +
			"/tracks?position=-1&uris=spotify%3Atrack%" +
			songID;
		let method = "POST";

		return this.apiCall(endpoint, method).catch((error) => {
			console.error(error);
		});
	},

	getCurrentSong() {
		/*
		get information about the song that is currently playing
		*/
	},
};

export default DataSource;
