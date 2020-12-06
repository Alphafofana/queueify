import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import NewSessionView from "./newSessionView";
import JoinSessionView from "./joinSessionView";
import { useAuth } from "../../contexts/AuthContext";

function SessionHandler({ model }) {
	const { logout, currentUser } = useAuth();
	const [error, setError] = useState("");
	const [sessionName, setSessionName] = useState("");
	const [sessionPin, setSessionPin] = useState(null);
	const history = useHistory();
	//const [loading, setLoading] = useState(false);

	async function handleLogout() {
		setError("");

		try {
			await logout();
			history.push("/login");
		} catch {
			console.error("Failed to log out!");
			setError("Failed to log out");
		}
	}

	function newSession() {
		model.createSession(sessionName, sessionPin);
	}

	function joinSession() {

	}

	// Printout of current user for debug
	//return <div> {JSON.stringify(currentUser)}</div>;

	return (
		currentUser &&
		((currentUser.uid.includes("spotify") && (
			<NewSessionView sessionName={name => setSessionName(name)}	sessionPin={pin => setSessionPin(pin)} submit={newSession()} user={currentUser} logout={handleLogout} />
		)) ||
			((currentUser.providerData[0].providerId === "google.com" ||
				currentUser.providerData[0].providerId === "facebook.com") && (
				<JoinSessionView user={currentUser} logout={handleLogout} />
			)))
	);
}

export default SessionHandler;
