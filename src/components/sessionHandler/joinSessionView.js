import React from "react";
import css from "./joinSessionView.module.css";
import {
	Col,
	Container,
	Button,
	Jumbotron,
	FormControl,
	Form,
} from "react-bootstrap";

const JoinSessionView = ({ sessionID, sessionPin, submit, user }) => {
	return (
		<Container fluid className={css.sessionContainer}>
			<Col>
				<Jumbotron className={css.sessionJumbo}>
					<h1>Hello, @{user.displayName}!</h1>
					<p>
						Thank you for using Queueify. You are not part of a
						session yet, let's join one!
					</p>
					<Form onSubmit={submit}>
						<Form.Group controlid="sessionID">
							<Form.Label>Session ID</Form.Label>
							<Form.Control
								type="text"
								placeholder="Session ID"
								onChange={(event) =>
									sessionID(event.target.value)
								}
							></Form.Control>
							<Form.Text>
								Enter the session ID provided by your host
							</Form.Text>
							<Form.Group controlid="sessionPin">
								<Form.Label>Session Pin</Form.Label>
								<Form.Control
									type="password"
									autoComplete="on"
									placeholder="Pin"
									onChange={(event) =>
										sessionPin(event.target.value)
									}
								></Form.Control>
								<Form.Text>
									Type in the pin or passphrase provided by
									your host
								</Form.Text>
							</Form.Group>
							<Button variant="dark" type="submit">
								Submit
							</Button>
						</Form.Group>
					</Form>
				</Jumbotron>
			</Col>
		</Container>
	);
};

export default JoinSessionView;
