import React from "react";
import { Col, Container, Button, Nav, Navbar } from "react-bootstrap";

const Navibar = ({ user, logout }) => {
	return (
		<Navbar
			fixed="top"
			expand="lg"
			bg="dark"
			variant="dark"
			style={{ marginLeft: "250px", padding: 0 }}
		>
			<Container>
				<Col lg={7}>
					<Nav className="mr-auto"></Nav>
				</Col>
				<Col lg={2}>
					<Navbar.Text>User: {user && user.displayName}</Navbar.Text>
				</Col>
				<Col lg={1}>
					<Navbar.Text>
						{" "}
						<img
							alt=""
							src={user && user.photoURL}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>
					</Navbar.Text>
				</Col>
				<Col lg={2}>
					<Navbar.Text>
						<Button onClick={logout} variant="outline-light">
							Log out
						</Button>
					</Navbar.Text>
				</Col>
			</Container>
		</Navbar>
	);
};

export default Navibar;
