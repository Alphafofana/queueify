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
    this.currentUser = auth.currentUser;
    this.currentSession = "";
    this.currentPlaylist = "";
  }

  getFirebaseData(collection, document) {
    let data = "";
    if (this.currentUser) {
      let doc = db.collection(collection).doc(document);
      doc
        .get()
        .then((d) => {
          if (d.exists) {
            data = doc.data();
          } else {
            console.log("The document does not exist.");
          }
        })
        .catch((error) => {
          console.log("Could not retrieve the document:", error);
        });
    }
    return data;
  }

  getUserType() {
    let userType = "";
    let data = this.getFirebaseData("users", this.currentUser.uid);
    if (data) {
      userType = data.userType;
    } else {
      console.error("could not retrieve the user type");
    }
    return userType;
  }

  async getUserToken() {
    let userToken = "";
    let data = this.getFirebaseData("users", this.currentUser.uid);
    if (data) {
      userToken = data.userToken;
    } else {
      console.error("could not retrieve the user token");
    }
    return userToken;
  }

  createSession(sessionName, sessionPin) {
    //If currentUser is a host, create a new session and store it in the session collection
    let userType = this.getUserType();
    let userToken = this.userToken();
    console.log(userType, userToken);
    if (userType && userType == "host") {
      // Create a new playlist on spotify
      playlistID = DataSource.createPlaylist(
        this.currentUser.uid.split(":")[1],
        sessionName
      ).id;

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
        hostUid: this.currentUser.uid,
        name: sessionName,
        pin: sessionPin,
        playlistId: playlistID,
      });

      // Update the user adding the session
      db.collection("users")
        .doc(this.currentUser.uid)
        .set({ sessionId: this.currentSession }, { merge: true });
      console.log("Session created with session ID " + this.currentSession);
    } else {
      console.error("The user does not exist or is not a host");
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
        .doc(this.currentUser.uid)
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
		return this.getFirebaseData("playlist", this.currentPlaylist)
    }
  }

  addSong(song) {
	  let playlist = this.getCurrentPlaylist();
	  
    /*
		if song does not already exist
		add song to session playlist 
		votes is 0 and position is 0
		*/
  }
  /*
	Firebase functions will look for changes in playlists.
	If a song is added, the function will add this song to the playlist. 
	If a song has the order changed, the function will change the order of the playlist
	*/

  deleteSong(song) {
    /*
		check if they are host
		if they are, they can delete song
		*/
  }

  vote(song) {
    /*
		check if user has voted before on this song. Grey the button out for the user!
		add a vote to the song in current session
		push the change to firebase
		*/
  }
}

export default QueueifyModel;
