import React from "react";
import css from "./newSessionView.module.css";
import ReactCodeInput from "react-code-input";
import {
	Alert,
	Col,
	Container,
	Button,
	Jumbotron,
	Form,
	OverlayTrigger,
	Tooltip,
} from "react-bootstrap";

const NewSessionView = ({ sessionName, sessionPin, submit, user, error }) => {
	return (
		<Container fluid className={css.sessionContainer}>
			<Col>
				<Col lg={{ span: 4, offset: 4 }}>
					{error && <Alert variant="danger">{error}</Alert>}
				</Col>
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
										Your Guests will use this to identify
										the session.
									</Tooltip>
								}
							>
								<Form.Label>Session Name</Form.Label>
							</OverlayTrigger>
							<Form.Control
								required
								type="text"
								placeholder="Session name"
								onChange={(event) =>
									sessionName(event.target.value)
								}
							></Form.Control>
							<br></br>
							<Form.Group controlid="sessionPin">
								<OverlayTrigger
									placement="right"
									overlay={
										<Tooltip id={`tooltip-$"right"`}>
											Type in a pin, only numbers 0-9
										</Tooltip>
									}
								>
									<Form.Label>Session Pin</Form.Label>
								</OverlayTrigger>
								<br></br>
								<ReactCodeInput
									//type="password"
									pattern="[0-9]"
									fields={4}
									onChange={(value) => sessionPin(value)}
								></ReactCodeInput>
							</Form.Group>
							<Button variant="dark" type="submit">
								Create session
							</Button>
						</Form.Group>
					</Form>
				</Jumbotron>
			</Col>
		</Container>
	);
};

export default NewSessionView;
