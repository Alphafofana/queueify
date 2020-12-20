import React from "react";
import css from "./sidebarView.module.css";
import logo from "../../assets/queueify_logo1.svg";
import { Nav, NavDropdown } from "react-bootstrap";

const SidebarView = ({ path, usertype }) => {
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
				<Nav.Link
					href={`/session/active`}
					disabled={
						path === "/session/active" || path === "/search"
							? false
							: true
					}
				>
					{" "}
					<i className="fas fa-home" /> Session
				</Nav.Link>
				<Nav.Link
					href="/search"
					disabled={
						path === "/session/active" || path === "/search"
							? false
							: true
					}
				>
					{" "}
					<i className="fas fa-search" /> Add Songs
				</Nav.Link>
				{usertype === "host" ? (
					<Nav.Link
						href="/close" //TODO: Add correct Hrefs
						disabled={
							path === "/session/active" || path === "/search"
								? false
								: true
						}
					>
						{" "}
						<i className="fas fa-times" /> End Session
					</Nav.Link>
				) : (
					<Nav.Link
						href="/close" //TODO: Add correct Hrefs
						disabled={
							path === "/session/active" || path === "/search"
								? false
								: true
						}
					>
						{" "}
						<i className="fas fa-door-open" /> Leave Session
					</Nav.Link>
				)}
			</Nav>
		</div>
	);
};

export default SidebarView;
