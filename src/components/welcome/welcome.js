import WelcomeView from "./welcomeView";
import WelcomeHostView from "./welcomeHostView";
import WelcomeGuestView from "./welcomeGuestView";
import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function Welcome() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit() {
		try {
			setError("");
			setLoading(true);
			await login();
		} catch {
			setError("Failed to log in");
		}

		setLoading(false);
	}

	return !localStorage.getItem("isAuthenticated") ? (
		<WelcomeView loginhost={handleSubmit} loginguest={handleSubmit} />
	) : (
		(localStorage.getItem("userType") === "host" && <WelcomeHostView />) ||
			(localStorage.getItem("userType") === "guest" && (
				<WelcomeGuestView />
			))
	);
}

export default Welcome;
