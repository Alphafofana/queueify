import React from "react";
import css from "./sidebarView.module.css";
import logo from "../../assets/queueify_logo1.svg";
import { Nav } from "react-bootstrap";

const SidebarView = (user, logout, error) => {
	return (
		<div className="sidebar">
			<div className="logo">
				<img src={logo} className={css.queueifyLogo} alt="logo" />
			</div>
			<Nav
				variant="pills"
				className="flex-column sidebar-nav"
				activeKey={window.location.pathname}
			>
				<Nav.Link href="/currentSession" disabled={window.location.pathname==="/currentSession"}>
				{" "}
					<i className="fas fa-home" /> Session
				</Nav.Link>
				<Nav.Link href='/session'>
					{" "}
					<i className="fas fa-book"  disabled={window.location.pathname==='/session'}/> New Session
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
