import WelcomeView from "./welcomeView";
import WelcomeHostView from "./welcomeHostView";
import WelcomeGuestView from "./welcomeGuestView";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function Welcome() {
	const { logout, login, currentUser } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const [showGuestLogin, setLoginGues] = useState(false);
	const [showHostLogin, setLoginHost] = useState(false);
	const handleShowGuesLogin = () => setLoginGues(!showGuestLogin);
	const handleShowHostLogin = () => setLoginHost(!showHostLogin);

	async function handleLogin(e, provider) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(provider).then((result) => {
				//console.log(JSON.stringify(result));
				//Collect data!
				//console.log(result);
			});
		} catch {
			console.error("Failed to log in!");
			setError("Failed to log in");
		}

		setLoading(false);
	}

	async function handleLogout() {
		setError("");

		try {
			await logout();
		} catch {
			console.error("Failed to log out!");
			setError("Failed to log out");
		}
	}

	//Printout for debug
	/* 	function printCurrentUser() {
		if (currentUser != null) {
			currentUser.providerData.forEach(function (profile) {
				console.log("Sign-in provider: " + profile.providerId);
				console.log("  Provider-specific UID: " + profile.uid);
				console.log("  Name: " + profile.displayName);
				console.log("  Email: " + profile.email);
				console.log("  Photo URL: " + profile.photoURL);
			});
		}
	}
	printCurrentUser(); */

	return !currentUser ? (
		<WelcomeView
			handleShowGuesLogin={handleShowGuesLogin}
			handleShowHostLogin={handleShowHostLogin}
			loginguest={handleLogin}
			loginhost={() => console.log("not implemented!")}
			showGuestLogin={showGuestLogin}
			showHostLogin={showHostLogin}
			loading={loading}
			error={error}
		/>
	) : (
		(currentUser.providerData[0].providerId === "spotify.com" && (
			<WelcomeHostView
				user={currentUser.providerData[0]}
				logout={handleLogout}
			/>
		)) ||
			((currentUser.providerData[0].providerId === "google.com" ||
				currentUser.providerData[0].providerId === "facebook.com") && (
				<WelcomeGuestView
					user={currentUser.providerData[0]}
					logout={handleLogout}
				/>
			))
	);
}

export default Welcome;
