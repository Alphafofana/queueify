import React from "react";
import { Col, Container, Button, Nav, Navbar, Dropdown, DropdownButton} from "react-bootstrap";
import css from "./navbar.module.css";

const Navibar = ({ user, logout }) => {
	return (
		<Navbar className={css.navbar} fixed="top" variant="dark">
			<Container className="largenavbar">
				<Col lg="7" md="5" className="largenavbar">
					<Nav className="mrs-auto"></Nav>
				</Col>
				<Col lg="2" md="2" className="largenavbar">
					<Navbar.Text className="mrs-auto">User: {user.displayName}</Navbar.Text>
				</Col>
				<Col lg="1" md="1" className="largenavbar">
					<Navbar.Text className="mrs-auto">
						{" "}
						{user.photoURL ? (
							<img
								alt=""
								src={user.photoURL}
								width="30"
								height="30"
								className="d-inline-block align-top"
							/>
						) : (
							<i className="fas fa-user"></i>
						)}
					</Navbar.Text >
				</Col>
				<Col lg="2" md="2" className="largenavbar">
					<Navbar.Text className="mrs-auto">
						<Button onClick={logout} variant="outline-light">
							Log out
						</Button>
					</Navbar.Text>
				</Col>
			</Container>

			<DropdownButton 
			menuAlign="right"
			title="Menu" 
			className="smallmenu"
			variant="outline-light"
			> 
			
        		<Dropdown.Item href="/session/:sessionId">
					{" "}
					<i className="fas fa-home" /> Session
					</Dropdown.Item>
   				<Dropdown.Item href='/session'>
					{" "}
					<i className="fas fa-book" /> New Session
					</Dropdown.Item>
				<Dropdown.Item href='/search'>
					{" "}
					<i className="fas fa-search" /> Search
					</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item disabled>
					User: {user.displayName}
					</Dropdown.Item>
				<Dropdown.Item>
					<Button onClick={logout} variant="dark">
							Log out
						</Button>
					</Dropdown.Item>

     			 </DropdownButton>
		</Navbar>
	);
};

export default Navibar;
