import React from "react";
import SidebarView from "./sidebarView";
import { useAuth } from "../../contexts/AuthContext";

function Sidebar({ model }) {
	const { currentUser } = useAuth();

	return (
		<SidebarView
			user={currentUser.providerData[0]}
			session={model.getModelProperty("currentSession")}
		/>
	);
}

export default Sidebar;
