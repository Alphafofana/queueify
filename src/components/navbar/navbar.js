import React from "react";
import logo from "../../assets/queueify_logo1_mini.svg";
import { Container, Button, Nav, Navbar } from "react-bootstrap";

const Navibar = () => {
	return (
		<div className="navbar">
			<Navbar
				fixed="top"
				expand="lg"
				bg="dark"
				variant="dark"
				style={{ marginLeft: "250px" }}
			>
				<Container>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						Queueify
					</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#search">Search</Nav.Link>
						<Nav.Link href="#yourlibrary">Your Library</Nav.Link>
					</Nav>
					<Button variant="outline-light">Login</Button>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navibar;
