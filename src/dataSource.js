const DataSource = {
	apiCall(endpoint, method, body) {
		return fetch(endpoint, {
			method: method,
			headers: {
				Authorization: "Bearer " + process.env.REACT_APP_SPOTIFY_TOKEN,
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

		let playlistID = "";

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
};

export default DataSource;
