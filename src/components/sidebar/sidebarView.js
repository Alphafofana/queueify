import React from "react";
import css from "./sidebarView.module.css";
import logo from "../../assets/queueify_logo1.svg";
import { Nav, Button } from "react-bootstrap";

const SidebarView = (user, logout, error, currNav, sessionNav, searchNav) => {
	return (
		<div className="sidebar">
			<div className="logo">
				<img src={logo} className={css.queueifyLogo} alt="logo" />
			</div>

			<Nav
				variant="pills"
				defaultActiveKey="/home"
				className="flex-column sidebar-nav"
			>
				<Nav.Link eventKey="/home" onSelect={sessionNav}>
					{" "}<Button className={css.sidebarButtons} onClick={sessionNav}>
					<i className="fas fa-home"  /> Session</Button>
				</Nav.Link>
				<Nav.Link eventKey="/search" onSelect={searchNav}>
				{" "}
					<Button className={css.sidebarButtons} onClick={searchNav}>
					<i className="fas fa-search" /> Search</Button>
				</Nav.Link>
			</Nav>
		</div>
		

	);
};

export default SidebarView;
