import React from "react";
import SidebarView from "./sidebarView";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Sidebar({ model }) {
	const { currentUser } = useAuth();
	return (
		<SidebarView
			location={useLocation()}
			session={model.getModelProperty("currentSession")}
		/>
	);
}

export default Sidebar;
