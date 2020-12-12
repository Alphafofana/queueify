import React from "react";
import css from "./newSessionView.module.css";
import {
	Col,
	Container,
	Button,
	Jumbotron,
	Form,
	OverlayTrigger,
	Tooltip,
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
						<OverlayTrigger
     					 placement="right"
     					 overlay={
       					<Tooltip id={`tooltip-$"right"`}>
         				 Your Guests will use this to identify thesession.
      	 					</Tooltip>}>
						<Form.Label>Session Name</Form.Label>
							</OverlayTrigger>
							<Form.Control
								type="text"
								placeholder="Session name"
								onChange={(event) =>
									sessionName(event.target.value)
								}
							></Form.Control>

							<Form.Group controlid="sessionPin">
							<OverlayTrigger
     						 placement="right"
     						 overlay={
       						<Tooltip id={`tooltip-$"right"`}>
         					 Type in a pin or passphrase.
      	 					</Tooltip>}>
								<Form.Label>Session Pin</Form.Label>
							</OverlayTrigger>
								<Form.Control
									type="password"
									autoComplete="on"
									placeholder="Pin"
									onChange={(event) =>
										sessionPin(event.target.value)
									}
								></Form.Control>

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

export default NewSessionView;
