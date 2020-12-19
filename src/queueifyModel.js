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
    currentPlaylist = "",
    subscribers = []
  ) {
    this.currentSession = currentSession;
    this.currentSessionName = currentSessionName;
    this.currentPlaylist = currentPlaylist;
    this.subscribers = subscribers;
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
    this.subscribers = this.subscribers.concat(obs);
    return () => this.removeObserver(obs);
  }
  /**
   * remove observer/subscriber from the model
   * @param  {callback} obs - callback function
   */
  removeObserver(obs) {
    this.subscribers = this.subscribers.filter((o) => o !== obs);
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
    this.saveToLocalStorage();
  }
  /**
   * Add localStorage observer to Subscribe to the Model
   */
  saveToLocalStorage() {
    this.addObserver(() => {
      localStorage.setItem(
        "queueifyModel",
        JSON.stringify({
          //Conversion from object to String (serialization)
          currentSession: this.currentSession,
          currentSessionName: this.currentSessionName,
          currentPlaylist: this.currentPlaylist,
        })
      );
    });
  }

  //TODO: Remove this?
  getFirebaseData(collection, document) {
    if (auth.currentUser) {
      let doc = db.collection(collection).doc(document);
      return doc
        .get()
        .then((d) => {
          if (d.exists) {
            return d.data().spotifyToken;
          } else {
            console.log("The document does not exist.");
          }
        })
        .catch((error) => {
          console.log("Could not retrieve the document:", error);
        });
    }
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
        this.currentPlaylist = playlist.id;
        return batch.commit().then(() => {
          this.notifyObservers();
          this.firebaseSubscriber();
          return this.currentSession;
        });
      })
      .catch((error) => {
        console.log("Failed to create session: ", error);
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
        users: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.uid),
      })
      .then(() => {
        const setUser = user.set({ sessionID: sessionID }, { merge: true });
        this.currentSession = sessionID;
        this.currentSessionName = sessionName;
        const getPlaylist = session
          .get()
          .then(
            (session) => (this.currentPlaylist = session.data().playlistId)
          );

        return Promise.all([setUser, getPlaylist]).then(() => {
          this.notifyObservers();
          this.firebaseSubscriber();
          return this.currentSession;
        });
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
        throw new Error("Failed to join session" + error);
      });
  }

  getCurrentPlaylist() {
    // Return the data about the playlist from firebase
    let playlist = [];
    return db
      .collection("session")
      .doc(this.currentSession)
      .collection(this.currentPlaylist)
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
        console.log("Error getting playlist:", error);
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
    /*
		if song does not already exist
		add song to session playlist 
		votes is 0 and position is last (-1)
		*/
    //console.log("Model, add song!");
    //console.log("Model, songObj: ", songObj);
    const { id: songID, artists: artistsObj, name: title } = songObj;
    const artists = artistsObj.map((artist) => artist.name);
    //console.log(songID, artists, title);
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const song = db
      .collection("session")
      .doc(this.currentSession)
      .collection(this.currentPlaylist)
      .doc(songID);

    return song
      .get()
      .then((doc) => {
        if (doc.exists) {
          throw new Error("song already exists!");
        } else {
          song.set({
            artist: artists,
            //position: -1, remove position
            timestamp: timestamp,
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
      .collection(this.currentPlaylist)
      .doc(songID)
      .delete()
      .then(() => console.log("deleted song successfully"));
  }

  upVote(songID) {
    const session = db.collection("session").doc(this.currentSession);
    const song = db
      .collection("session")
      .doc(this.currentSession)
      .collection(this.currentPlaylist)
      .doc(songID);
    const increment = firebase.firestore.FieldValue.increment(1);
    const user = firebase.firestore.FieldValue.arrayUnion(auth.currentUser.uid);
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
          session.update({
            totalVotes: increment,
          });
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
    const session = db.collection("session").doc(this.currentSession);
    const playlist = db
      .collection("session")
      .doc(this.currentSession)
      //TODO: Subscribe on session instead to ensure notifications
      .collection(this.currentPlaylist);

    session.onSnapshot(
      {
        // Listen for document metadata changes
        includeMetadataChanges: true,
      },
      (doc) => {
        console.log("onSnapshot, session: " + this.currentSession);
        this.notifyObservers();
      }
    );
    playlist.onSnapshot(
      {
        // Listen for document metadata changes
        includeMetadataChanges: true,
      },
      (doc) => {
        console.log("onSnapshot: playlist: " + this.currentPlaylist);
        this.notifyObservers();
      }
    );
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
