import React from "react";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";
import css from "./currentSessionGuestView.module.css";
import { Col, Container, Button, Table, Row } from "react-bootstrap";

const CurrentSessionGuestView = ({
	user,
	logout,
	error,
	sessionName,
	sessionID,
}) => {
	return (
		<Container fluid className={css.currentSession}>
			<Sidebar />
			<Navbar user={user} logout={logout} />
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
									<th>TITLE</th>
									<th>ADDED</th>
									<th>DURATION</th>
									<th>SCORE</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>All I Want For Christmas Is You</td>
									<td>15 min ago</td>
									<td>4:01</td>
									<td>7 pts</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Last christmas</td>
									<td>13 min ago</td>
									<td>4:24</td>
									<td>5 pts</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Ge Up Igen</td>
									<td>17 min ago</td>
									<td>2:50</td>
									<td>0 pts</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default CurrentSessionGuestView;
