import React from "react";
import css from "./sidebarView.module.css";
import logo from "../../assets/queueify_logo1.svg";
import { Nav, Button } from "react-bootstrap";

const SidebarView = ({ path, usertype, leaveSession }) => {
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
						window.location.pathname === "/session/active" ||
						window.location.pathname === "/search"
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
						window.location.pathname === "/session/active" ||
						window.location.pathname === "/search"
							? false
							: true
					}
				>
					{" "}
					<i className="fas fa-search" /> Add Songs
				</Nav.Link>
				{usertype === "host" ? (
					<Button
						onClick={leaveSession} //TODO:Add End session
						variant="outline-light"
						className={css.sidebarButton}
						disabled={
							window.location.pathname === "/session/active" ||
							window.location.pathname === "/search"
								? false
								: true
						}
					>
						{" "}
						<i className="fas fa-door-open" /> Leave Session
					</Button>
				) : (
					<Button
						onClick={leaveSession}
						variant="outline-light"
						className={css.sidebarButton}
						disabled={
							window.location.pathname === "/session/active" ||
							window.location.pathname === "/search"
								? false
								: true
						}
					>
						{" "}
						<i className="fas fa-door-open" /> Leave Session
					</Button>
				)}
			</Nav>
		</div>
	);
};

export default SidebarView;
