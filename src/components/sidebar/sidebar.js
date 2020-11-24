import React from "react";
import logo from "../../assets/queueify_logo1.svg";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="logo">
				<img src={logo} className="queueify-logo" alt="logo" />
			</div>

			<Nav
				variant="pills"
				defaultActiveKey="/home"
				className="flex-column sidebar-nav"
			>
				<Nav.Link eventKey="link1">
					{" "}
					<i class="fas fa-home" /> Home
				</Nav.Link>
				<Nav.Link eventKey="link2">
					{" "}
					<i class="fas fa-search" /> Search
				</Nav.Link>
				<Nav.Link eventKey="link3">
					{" "}
					<i class="fas fa-book" /> Your Library
				</Nav.Link>
			</Nav>
		</div>
	);
};

export default Sidebar;
