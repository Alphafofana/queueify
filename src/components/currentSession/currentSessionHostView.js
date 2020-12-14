import React from "react";
import css from "./currentSessionGuestView.module.css";
import { Col, Container, Button, Table, Row } from "react-bootstrap";

const CurrentSessionHostView = ({
	user,
	error,
	playlist,
	vote,
	sessionID,
	sessionName,
}) => {
	return (
		<Container fluid className={css.currentSession}>
			<Container className={css.sessionInfo}>
				<Row>
					<Col className={css.sessionDetails}>
						<p>Session Name: {sessionName}</p>
						<p>Session ID: {sessionID}</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<Table
							striped
							bordered
							hover
							variant="dark"
							className={css.queue}
						>
							<thead>
								<tr>
									<th>#</th>
									<th>ARTIST</th>
									<th>TITLE</th>
									<th>VOTES</th>
									<th>REMOVE</th>
								</tr>
							</thead>
							<tbody>
								{playlist &&
									playlist.map((song, index) => (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{song.artist.join(", ")}</td>
											<td>{song.title}</td>
											<td>
												{song.votes}
												<Button
													variant="outline-light"
													size="sm"
													onClick={(e) => {
														e.preventDefault();
														vote(song.id).catch(
															(error) => {
																console.error(
																	"Could not vote:"
																); //TODO: check errortype
																//handleShowError();
															}
														);
													}}
												>
													↑
												</Button>
											</td>
											<td>
												todo
												<Button
													variant="outline-light"
													size="sm"
												>
													x
												</Button>
											</td>
										</tr>
									))}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default CurrentSessionHostView;
