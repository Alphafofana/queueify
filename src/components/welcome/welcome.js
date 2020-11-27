import WelcomeView from "./welcomeView";
import WelcomeHostView from "./welcomeHostView";
import WelcomeGuestView from "./welcomeGuestView";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function Welcome() {
	const { login, currentUser } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login().then((result) => {
				//console.log(JSON.stringify(result));
				//Collect data!
				console.log(result);
			});
		} catch {
			console.error("error!!");
			setError("Failed to log in");
		}

		setLoading(false);
	}

	if (currentUser != null) {
		currentUser.providerData.forEach(function (profile) {
			console.log("Sign-in provider: " + profile.providerId);
			console.log("  Provider-specific UID: " + profile.uid);
			console.log("  Name: " + profile.displayName);
			console.log("  Email: " + profile.email);
			console.log("  Photo URL: " + profile.photoURL);
		});
	}

	return !currentUser ? (
		<WelcomeView
			loginguest={handleSubmit}
			loginhost={() => console.error("Not implemented!")}
			loading={loading}
		/>
	) : (
		(currentUser.providerData[0].providerId === "spotify.com" && (
			<WelcomeHostView user={currentUser.providerData[0]} />
		)) ||
			(currentUser.providerData[0].providerId === "google.com" && (
				<WelcomeGuestView />
			))
	);
}

export default Welcome;
