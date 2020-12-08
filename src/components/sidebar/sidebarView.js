import React from "react";
import css from "./sidebarView.module.css";
import logo from "../../assets/queueify_logo1.svg";
import { Nav } from "react-bootstrap";

const SidebarView = (user, logout, error, getLocation) => {
	return (
		<div className="sidebar">
			<div className="logo">
				<img src={logo} className={css.queueifyLogo} alt="logo" />
			</div>
			<Nav
				variant="pills"
				className="flex-column sidebar-nav"
			>
				<Nav.Link href='/session'>
					{" "}
					<i className="fas fa-home"  /> New Session
				</Nav.Link>
				<Nav.Link href="/search">
				{" "}
					<i className="fas fa-search" /> Search
				</Nav.Link>
			</Nav>
		</div>
		

	);
};

export default SidebarView;
