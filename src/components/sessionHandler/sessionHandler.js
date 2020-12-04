import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import NewSessionView from "./newSessionView";
import JoinSessionView from "./joinSessionView";
import { useAuth } from "../../contexts/AuthContext";

function SessionHandler() {
	const { logout, currentUser } = useAuth();
	const [error, setError] = useState("");
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
	//Printout for debug

	return <h1> {JSON.stringify(currentUser)}</h1>;

	/* currentUser &&
		((currentUser.providerData[0].providerId === "spotify.com" && (
			<NewSessionView
				user={currentUser.providerData[0]}
				logout={handleLogout}
			/>
		)) ||
			((currentUser.providerData[0].providerId === "google.com" ||
				currentUser.providerData[0].providerId === "facebook.com") && (
				<JoinSessionView
					user={currentUser.providerData[0]}
					logout={handleLogout}
				/>
			)))
	); */
}

export default SessionHandler;
