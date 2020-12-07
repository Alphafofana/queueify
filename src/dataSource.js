import { auth, db } from "./services/firebase"

const DataSource = {
	async getToken() {
		if (auth.currentUser) {
			let user = db.collection("users").doc(auth.currentUser.uid);
			//Men senare måste vi snarare titta på session och dess token
			let token = await user.get().then((doc) => {
				if (doc.exists) {
					return doc.data().spotifyToken;
				} else {
					console.log("The document does not exist.")
				}
			}).catch(error => {
				console.log("Could not retrieve the document:", error);
			})
			return token;
		}
	},
	async apiCall(endpoint, method, body) {
		let token = await this.getToken().then(data => data).catch(err => console.error(err));
		return await fetch(endpoint, {
			method: method,
			headers: {
				Authorization: "Bearer " + token,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: body ? JSON.stringify(body) : body,
		}).then((response) => {
			return response.json();
		});
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

	createPlaylist(userID, playlistName) {
		let endpoint =
			"https://api.spotify.com/v1/users/" + userID + "/playlists/";
		let method = "POST";
		let body = {
			name: playlistName,
			description: "Playlist for the queueify app",
			public: false,
		};
		console.log("success!")
		return this.apiCall(endpoint, method, body).catch((error) => {
			console.error(error);
		});

		//Should probably try and return the same thing from each call
		// .then(
		// 	(result) => {
		// 		playlistID = result.id;
		// 	},
		// 	(error) => {
		// 		console.error(error);
		// 	}
		// );
		// return playlistID;
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
