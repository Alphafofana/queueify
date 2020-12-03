import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import LoginView from "./loginView";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
	const { login, currentUser, userID } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

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
			history.push("/session");
		} catch {
			console.error("Failed to log in!");
			setError("Failed to log in");
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
		} else {
			console.log("not signed in!");
		}
	}
	printCurrentUser(); */
	function HandlePopupResult(result) {
		alert("Login/result of popup is: " + result);
	}
	return !currentUser ? (
		<LoginView
			handleShowGuesLogin={handleShowGuesLogin}
			handleShowHostLogin={handleShowHostLogin}
			loginguest={handleLogin}
			loginhost={() => {
				window.open(
					//window.location + "/popup",
					"https://test-queueify.herokuapp.com/popup",
					"name",
					"height=585,width=400"
				);
				//console.log("not implemented!");
				//setError("not implemented!");
			}} //TODO: Implemet this function */
			showGuestLogin={showGuestLogin}
			showHostLogin={showHostLogin}
			loading={loading}
			error={error}
		/>
	) : (
		<Redirect to="/session" />
	);
}

export default Login;
