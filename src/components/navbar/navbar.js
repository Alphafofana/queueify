import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavbarView from "./navbarView";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
	const { logout, currentUser } = useAuth();
	const [error, setError] = useState("");
	const history = useHistory();

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
	return (
		<NavbarView user={currentUser} logout={handleLogout} error={error} />
	);
}

export default Navbar;
