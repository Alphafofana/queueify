import React from "react";
import logo from "../../assets/queueify_logo3.svg";
import { Jumbotron, Button } from "react-bootstrap";
//queueify_logo1.svg

const Welcome = () => {
	return (
		<div className="welcomePage">
			<Jumbotron fluid>
				<img
					alt=""
					src={logo}
					width="300"
					height="100"
					className="welcome-logo"
				/>

				<div className="headerWelcome">
					<h1>Welcome!</h1>
					<p>Login</p>
				</div>

				<p>
					<Button variant="success" className="btn-circle">
						Login as Guest
					</Button>
				</p>
				<p>
					<Button variant="success" className="btn-circle">
						Login as Host
					</Button>
				</p>

				<a href="url">Create new account</a>
			</Jumbotron>
		</div>
	);
};

export default Welcome;
