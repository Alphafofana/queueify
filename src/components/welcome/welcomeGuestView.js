import React from "react";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";
import css from "./welcomeGuestView.module.css";
import { Col, Container, Button, Jumbotron, Nav } from "react-bootstrap";

const WelcomeGuestView = ({ user, logout }) => {
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
