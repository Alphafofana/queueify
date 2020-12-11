import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import NewSessionView from "./newSessionView";
import JoinSessionView from "./joinSessionView";
import { useAuth } from "../../contexts/AuthContext";

function SessionHandler({ model }) {
	const { currentUser } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [sessionName, setSessionName] = useState("");
	const [sessionPin, setSessionPin] = useState(null);
	const history = useHistory();
	//const [loading, setLoading] = useState(false);

	function newSession(e) {
		e.preventDefault();
		setError("");
		setLoading(true);
		model
			.createSession(sessionName, sessionPin)
			.then((sessionID) => history.push("session/" + sessionID))
			.catch((error) => {
				console.error("Failed to create new session!");
				setError("Failed to create new session!");
			});
	}

	function joinSession(e) {
		e.preventDefault();
		setError("");
		setLoading(true);
		model
			.joinSession(sessionName, sessionPin)
			.then((sessionID) => history.push("session/" + sessionID))
			.catch((error) => {
				console.error("Failed to join new session!");
				setError("Failed to join new session!");
			});
	}

	// Printout of current user for debug
	//return <div> {JSON.stringify(currentUser)}</div>;

	return (
		currentUser &&
		((currentUser.uid.includes("spotify") && (
			<NewSessionView
				sessionName={(name) => setSessionName(name)}
				sessionPin={(pin) => setSessionPin(pin)}
				submit={(e) => newSession(e)}
				user={currentUser}
			/>
		)) ||
			((currentUser.providerData[0].providerId === "google.com" ||
				currentUser.providerData[0].providerId === "facebook.com") && (
				<JoinSessionView
					sessionName={(id) => setSessionName(id)}
					sessionPin={(pin) => setSessionPin(pin)}
					submit={(e) => joinSession(e)}
					user={currentUser}
				/>
			)))
	);
}

export default SessionHandler;
