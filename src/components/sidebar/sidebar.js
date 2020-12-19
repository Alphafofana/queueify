import React, { useState, useEffect } from "react";
import SidebarView from "./sidebarView";
import { useAuth } from "../../contexts/AuthContext";

function Sidebar({ model }) {
	const { currentUser } = useAuth();
	const usertype = (currentUser.uid.includes("spotify") && "host") || "guest";

	const [path, setPath] = useState(window.location.pathname);

	useEffect(() => {
		window.addEventListener("pageshow", () =>
			setPath(window.location.pathname)
		);

		return () => {
			window.removeEventListener("pageshow", () =>
				setPath(window.location.pathname)
			);
		};
	}, []);
	return <SidebarView path={path} usertype={usertype} />;
}

export default Sidebar;
