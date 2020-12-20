import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavbarView from "./navbarView";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
	const { logout, currentUser } = useAuth();
	const [error, setError] = useState("");
	const history = useHistory();

	const [isTop, setIsTop] = useState(true);
	useEffect(() => {
		document.addEventListener("scroll", () => {
			const istop = window.scrollY < 10;
			if (istop !== isTop) {
				setIsTop(istop);
			}
		});
	}, [isTop]);

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
		<NavbarView
			isTop={isTop}
			user={currentUser}
			logout={handleLogout}
			error={error}
		/>
	);
}

export default Navbar;
