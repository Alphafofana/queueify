import React from "react";
import css from "./sidebarView.module.css";
import logo from "../../assets/queueify_logo1.svg";
import { Nav, NavDropdown } from "react-bootstrap";

const SidebarView = ({ location, session }) => {
	console.log("current locaction: " + JSON.stringify(location));
	console.log("locaction check: " + JSON.stringify(location));
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
				<Nav.Link href={`/session/${session}`}>
					{" "}
					<i className="fas fa-home" /> Session
				</Nav.Link>
				<Nav.Link href="/session">
					{" "}
					<i className="fas fa-book" /> New Session
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
