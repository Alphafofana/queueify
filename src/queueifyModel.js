/**
 ********************************************************************************
 * @file Data Model class for Queueify.
 * @author Ella Soderberg, Alpha Fofana, Marta Hansbo, Laila Arman
 * @version 1.0
 ********************************************************************************
 */

import { auth, db } from "./services/firebase";
import DataSource from "./dataSource";
const crypto = require("crypto");

class QueueifyModel {
  constructor() {
    this.currentSession = "";
    this.currentPlaylist = "";
  }

  getFirebaseData(collection, document) {
    if (auth.currentUser) {
      let doc = db.collection(collection).doc(document);
      return doc
        .get()
        .then((d) => {
          if (d.exists) {
            return d.data();
          } else {
            console.log("The document does not exist.");
          }
        })
        .catch((error) => {
          console.log("Could not retrieve the document:", error);
        });
    }
  }

  async createSession(sessionName, sessionPin) {
    console.log("create session " + auth.currentUser.uid)
    //If currentUser is a host, create a new session and store it in the session collection
    //let userType = this.getUserType();
    let userToken = await this.getFirebaseData("users", auth.currentUser.uid).then(data => data.spotifyToken).catch(err => console.error(err));
    console.log("token!" + userToken);
    if (userToken) {
      // Create a new playlist on spotify
      let playlistID = await DataSource.createPlaylist(
        auth.currentUser.uid.split(":")[1],
        sessionName
      ).then(data => data.id).catch(error => console.error(error));
      console.log(playlistID);

      // Set currentPlaylist
      this.currentPlaylist = playlistID;

      // Create new instance of playlist in firebase
      db.collection("playlist").doc(playlistID);

      // Create hash string for current session
      this.currentSession = crypto
        .createHash("sha1")
        .update(sessionName + sessionPin)
        .digest("hex");

      // Create new session collection
      db.collection("session").doc(this.currentSession).set({
        hostToken: userToken,
        hostUid: auth.currentUser.uid,
        name: sessionName,
        pin: sessionPin,
        playlistId: playlistID,
      });

      // Update the user adding the session
      db.collection("users")
        .doc(auth.currentUser.uid)
        .set({ sessionId: this.currentSession }, { merge: true });
      console.log("Session created with session ID " + this.currentSession);
    } else {
      console.error("The token could not be retrieved");
    }
  }

  setCurrentSession(sessionName, sessionPin) {
    // Set the current session for a guest, if the session name and password is correct.
    let validSession = false;

    // Generate hash based upon the name and pin given
    let hashedSession = crypto
      .createHash("sha1")
      .update(sessionName + sessionPin)
      .digest("hex");

    // Check to see if the session exists
    let data = this.getFirebaseData("sessions", hashedSession);
    if (data) {
      validSession = true;
      this.currentSession = hashedSession;
      this.playlistId = data.playlistId;
      db.collection("users")
        .doc(auth.currentUser.uid)
        .set({ sessionId: this.currentSession }, { merge: true });
    } else {
      console.log("password or name does not match");
    }
    return validSession;
  }

  getCurrentPlaylist() {
    // Return the data about the playlist from firebase
    // From the API we get all the song info, here we get just the info about position, votes and such
    if (this.currentSession) {
      return this.getFirebaseData("playlist", this.currentPlaylist);
    }
  }

  addSong(songID) {
    /*
		if song does not already exist
		add song to session playlist 
		votes is 0 and position is last (-1)
		*/
    let songRef = db.collection("playlist");
    if (!songRef.where(songID, "in", [this.currentPlaylist])) {
      db.collection("playlist")
        .doc(this.currentPlaylist)
        .collection("songs")
        .doc(songID)
        .set({
          index: -1,
          voters: [auth.currentUser.uid],
          votes: 0,
        });
    } else {
      console.log("Song is already in playlist!")
    }
  }

  /*
	Firebase functions will look for changes in playlists.
	If a song is added, the function will add this song to the playlist. 
	If a song has the order changed, the function will change the order of the playlist
	*/

  deleteSong(songID) {
        /*
		check if they are host
		if they are, they can delete song
		*/
    let userType = this.getUserType();
    if (userType === "host") {
      let songDoc = db.collection("playlist").doc(this.currentPlaylist).collection("songs").doc(songID);
      let removeSong = songDoc.delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    }
  }

  /*
  vote(songID) {
    
		check if user has voted before on this song. Grey the button out for the user!
		add a vote to the song in current session
		push the change to firebase
		
    var songRef = db.collection("playlist").doc(this.currentPlaylist).collection("songs").doc(songID);
    songRef.update({
      voters: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.uid),
      vote: firebase.firestore.FieldValue.increment(1),
    });

  }*/
}

export default QueueifyModel;
