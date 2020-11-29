import React, { useState } from "react";
import CurrentSessionGuestView from "./currentSessionGuestView";
import CurrentSessionHostView from "./currentSessionHostView";
import { useAuth } from "../../contexts/AuthContext";

function CurrentSession() {
	const { logout, currentUser } = useAuth();
	const [error, setError] = useState("");
	//const [loading, setLoading] = useState(false); //TODO: DO we need a loading state?

	async function handleLogout() {
		setError("");

		try {
			await logout();
		} catch {
			console.error("Failed to log out!");
			setError("Failed to log out");
		}
	}

	return (
		currentUser &&
		((currentUser.providerData[0].providerId === "spotify.com" && (
			<CurrentSessionHostView
				user={currentUser.providerData[0]}
				logout={handleLogout}
				error={error}
			/>
		)) ||
			((currentUser.providerData[0].providerId === "google.com" ||
				currentUser.providerData[0].providerId === "facebook.com") && (
				<CurrentSessionGuestView
					user={currentUser.providerData[0]}
					logout={handleLogout}
					error={error}
					sessionName={"*PlaylistName*"} //TODO: Complete this!
					sessionID={"*12345*"} //TODO: Complete this!
				/>
			)))
	);
}

export default CurrentSession;
