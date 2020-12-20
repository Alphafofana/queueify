import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import NewSessionView from "./newSessionView";
import JoinSessionView from "./joinSessionView";
import { useAuth } from "../../contexts/AuthContext";

function SessionHandler({ model }) {
	const { currentUser } = useAuth();
	const [error, setError] = useState("");
	const [sessionName, setSessionName] = useState("");
	const [sessionPin, setSessionPin] = useState(null);
	const history = useHistory();

	function newSession(e) {
		e.preventDefault();
		setError("");
		model
			.createSession(sessionName, sessionPin)
			.then((sessionID) => history.push("session/active"))
			.catch((error) => {
				setError("Failed to create new session due to following error: " + error);
			});
	}

	function joinSession(e) {
		e.preventDefault();
		setError("");
		model
			.joinSession(sessionName, sessionPin)
			.then(history.push("session/active"))
			.catch((error) => {
				setError("Failed to join new session! Make sure you type in the correct session name and pin.");
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
				error={error}
			/>
		)) ||
			((currentUser.providerData[0].providerId === "google.com" ||
				currentUser.providerData[0].providerId === "facebook.com") && (
				<JoinSessionView
					sessionName={(id) => setSessionName(id)}
					sessionPin={(pin) => setSessionPin(pin)}
					submit={(e) => joinSession(e)}
					user={currentUser}
					error={error}
				/>
			)))
	);
}

export default SessionHandler;
