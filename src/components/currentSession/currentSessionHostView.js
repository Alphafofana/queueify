import React from "react";
import css from "./currentSessionGuestView.module.css";
import { Col, Container, Button, Table, Row } from "react-bootstrap";

const msToTime = (millis) => {
	var minutes = Math.floor(millis / 60000);
	var seconds = ((millis % 60000) / 1000).toFixed(0);
	return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const CurrentSessionHostView = ({
	user,
	logout,
	error,
	currSession,
	sessionID,
}) => {
	return (
		<Container fluid className={css.currentSession}>
			<Container className={css.sessionInfo}>
				<Row>
					<Col className={css.sessionDetails}>
						<p>Playlist Name: {currSession.name}</p>
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
									<th>TITLE</th>
									<th>ADDED</th>
									<th>DURATION</th>
									<th>UPVOTES</th>
									<th>REMOVE</th>
								</tr>
							</thead>
							<tbody>
								{currSession.hasOwnProperty("tracks") &&
									currSession.tracks.items.map(
										(item, index) => (
											<tr key={item.track.href}>
												<td>{index + 1}</td>
												<td>{item.track.name}</td>
												<td>{/*todo*/}todo</td>
												<td>
													{msToTime(
														item.track.duration_ms
													)}
												</td>
												<td>
													{/*todo*/}todo
													<Button
														variant="dark"
														size="sm"
													>
														↑
													</Button>
												</td>
												<td>
													{/*todo*/}todo
													<Button
														variant="dark"
														size="sm"
													>
														x
													</Button>
												</td>
											</tr>
										)
									)}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default CurrentSessionHostView;
