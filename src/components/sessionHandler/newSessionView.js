import React from "react";
import css from "./newSessionView.module.css";
import {
	Col,
	Container,
	Button,
	Jumbotron,
	FormControl,
	Form,
} from "react-bootstrap";

const NewSessionView = ({ sessionName, sessionPin, submit, user }) => {
	return (
		<Container fluid className={css.sessionContainer}>
			<Col>
				<Jumbotron className={css.sessionJumbo}>
					<h1>Hello, @{user.displayName}!</h1>
					<p>
						Thank you for using Queueify. You don't have an active
						session yet. Let's start one!
					</p>
					<Form onSubmit={submit}>
						<Form.Group controlid="sessionName">
							<Form.Label>Session Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Session name"
								onChange={(event) =>
									sessionName(event.target.value)
								}
							></Form.Control>
							<Form.Text>
								The name your guests will use to identify the
								session
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
									Type in a pin or passphrase
								</Form.Text>
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form.Group>
					</Form>
				</Jumbotron>
			</Col>
		</Container>
	);
};

export default NewSessionView;
