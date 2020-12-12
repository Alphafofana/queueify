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
	error,
	playlist,
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
									<th>ADDED</th>
									<th>DURATION</th>
									<th>UPVOTES</th>
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
											<td>{song.timestamp.seconds}</td>
											<td>{msToTime(300000)}</td>
											<td>
												{song.votes}
												<Button
													variant="dark"
													size="sm"
												>
													↑
												</Button>
											</td>
											<td>
												todo
												<Button
													variant="dark"
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
