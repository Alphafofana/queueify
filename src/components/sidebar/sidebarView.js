import React from "react";
import css from "./sidebarView.module.css";
import logo from "../../assets/queueify_logo1.svg";
import { Nav } from "react-bootstrap";

const SidebarView = () => {
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
				<Nav.Link eventKey="link1">
					{" "}
					<i className="fas fa-home" /> Home
				</Nav.Link>
				<Nav.Link eventKey="link2">
					{" "}
					<i className="fas fa-search" /> Search
				</Nav.Link>
				<Nav.Link eventKey="link3">
					{" "}
					<i className="fas fa-book" /> Your Library
				</Nav.Link>
			</Nav>
		</div>
	);
};

export default SidebarView;
