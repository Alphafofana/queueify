import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SidebarView from "./sidebarView";
import { useAuth } from "../../contexts/AuthContext";

function Sidebar() {
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
		<SidebarView
			user={currentUser.providerData[0]}
			logout={handleLogout}
			error={error}
		/>
	);
}

export default Sidebar;
