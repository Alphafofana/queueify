import React from "react";
import { Col, Container, Button, Jumbotron, Nav } from "react-bootstrap";
import Sidebar from "../sidebar/sidebar";
import css from "./welcomeGuestView.module.css";
import logo from "../../assets/queueify_logo1_mini.svg";
import Navbar from "../navbar/navbar";

const WelcomeGuestView = ({ user, logout }) => {
	//console.log("View: " + JSON.stringify(user));

	return (
		<Container fluid className={css.welcome}>
			<Sidebar />
			<Col>
				<Navbar user={user} logout={logout} />
				<Jumbotron className={css.welcomeJumbo}>
					<h1>Hello, @{user.displayName}!</h1>
					<p>
						Thank you for using Queueify, if you klick the button
						below you can join your Hosts Session.
					</p>
					<p>
						<Button variant="outline-success" href="#joinsession">
							Join a Session
						</Button>
					</p>
				</Jumbotron>
			</Col>
		</Container>
	);
};

export default WelcomeGuestView;
