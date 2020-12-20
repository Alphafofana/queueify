import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import LoginView from "./loginView";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
	const { login, currentUser } = useAuth();
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
			await login(provider).then((result) => {});
			history.push("/session");
		} catch {
			console.error("Failed to log in!");
			setError("Failed to log in");
		}
	}

	return !currentUser ? (
		<LoginView
			handleShowGuesLogin={handleShowGuesLogin}
			handleShowHostLogin={handleShowHostLogin}
			loginguest={handleLogin}
			loginhost={() => {
				window.open(
					window.location + "/popup",
					"name",
					"height=585,width=400"
				);
			}}
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
