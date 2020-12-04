import React from "react";
import css from "./newSessionView.module.css";
import { Col, Container, Button, Jumbotron } from "react-bootstrap";
const NewSessionView = ({ user, logout }) => {
	return (
		<Container fluid className={css.sessionContainer}>
			<Col>
				<Jumbotron className={css.sessionJumbo}>
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

export default NewSessionView;
