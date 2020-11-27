import React from "react";
import { Container, Button, Jumbotron, Nav, Navbar } from "react-bootstrap";
import Sidebar from "../sidebar/sidebar";
import css from "./welcomeGuestView.module.css";
import logo from "../../assets/queueify_logo1_mini.svg";

const WelcomeGuestView = (user) => {
	return (
		<>
			<Navbar
				fixed="top"
				expand="lg"
				bg="dark"
				variant="dark"
				style={{ marginLeft: "250px", padding: 0 }}
			>
				<Container>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						Queueify
					</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#search">Search</Nav.Link>
						<Nav.Link href="#yourlibrary">Your Library</Nav.Link>
					</Nav>

					<Navbar.Text>
						User: {user.displayName}+"spacespace"
					</Navbar.Text>
					<Button variant="outline-light">Log out</Button>
				</Container>
			</Navbar>
			<div className={css.welcome}>
				<Sidebar />
				<Jumbotron className={css.welcomeJumbo}>
					<h1>Hello, @username!</h1>
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
			</div>
		</>
	);
};

export default WelcomeGuestView;
