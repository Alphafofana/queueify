import React from "react";
import css from "./joinSessionView.module.css";
import ReactCodeInput from "react-code-input";

import {
	Col,
	Container,
	Button,
	Jumbotron,
	Form,
	OverlayTrigger,
	Tooltip,
	Alert,
} from "react-bootstrap";

const JoinSessionView = ({ sessionName, sessionPin, submit, user, error }) => {
	return (
		<Container fluid className={css.sessionContainer}>
			<Col>
				<Col lg={{ span: 4, offset: 4 }}>
					{error && <Alert variant="danger">{error}</Alert>}
				</Col>
				<Jumbotron className={css.sessionJumbo}>
					<h1>Hello, @{user.displayName}!</h1>
					<p>
						Thank you for using Queueify. You are not part of a
						session yet, let's join one!
					</p>
					<Form onSubmit={submit}>
						<Form.Group controlid="sessionName">
							<OverlayTrigger
								placement="right"
								overlay={
									<Tooltip id={`tooltip-$"right"`}>
										Enter the session name provided by your
										host
									</Tooltip>
								}
							>
								<Form.Label>Session Name</Form.Label>
							</OverlayTrigger>
							<Form.Control
								type="text"
								placeholder="Session Name"
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
											Type in the pin or passphrase
											provided by your host
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
								Join
							</Button>
						</Form.Group>
					</Form>
				</Jumbotron>
			</Col>
		</Container>
	);
};

export default JoinSessionView;
