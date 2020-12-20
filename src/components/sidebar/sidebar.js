import React from "react";
import { useHistory } from "react-router-dom";
import SidebarView from "./sidebarView";
import { useAuth } from "../../contexts/AuthContext";

function Sidebar({ model }) {
	const { currentUser } = useAuth();
	const history = useHistory();
	const usertype = (currentUser.uid.includes("spotify") && "host") || "guest";

	function handleLeveSession() {
		localStorage.clear();
		history.push("/session");
	}
	return <SidebarView usertype={usertype} leaveSession={handleLeveSession} />;
}

export default Sidebar;
