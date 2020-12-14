import { db } from "./services/firebase";

const DataSource = {
	getToken(sessionID) {
		const session = db.collection("session").doc(sessionID);
		return session
			.get()
			.then((doc) => {
				if (doc.exists) {
					return doc.data().hostToken;
				} else {
					//console.error("The document does not exist.");
					throw new Error("Failed to get token");
				}
			})
			.catch((error) => {
				console.error("Could not retrieve the document:", error);
				throw new Error("Failed to get token");
			});
	},
	apiCall(endpoint, method, sessionID, body) {
		return this.getToken(sessionID).then((token) => {
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
		});
	},

	searchSong(sessionID, query = "") {
		//console.log("searchSong, sessionID: " + sessionID + " query: " + query);
		if (query) {
			let endpoint =
				"https://api.spotify.com/v1/search?q=" + query + "&type=track";
			let method = "GET";
			return this.apiCall(endpoint, method, sessionID).catch((error) => {
				console.error(error);
			});
		} else {
			return Promise.resolve([]);
		}
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
	//TODO: Is this functionality needed for our MVP?
	//getPlaylist(playlistID) {

	//TODO: Is this functionality needed for our MVP?
	//changePlaylistOrder(playlistID, songPosition, newSongPosition) {

	//TODO: Is this functionality needed for our MVP?
	//deleteSong(playlistID, songID, songPosition) {
	//TODO: Is this functionality needed for our MVP?
	//addSong(playlistID, songID) {

	//TODO: Is this functionality needed for our MVP?
	//getCurrentSong() {
};

export default DataSource;
