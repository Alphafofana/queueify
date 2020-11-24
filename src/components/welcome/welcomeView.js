import React from "react";
import logo from "../../assets/queueify_logo2.svg";
import { Jumbotron, Button } from "react-bootstrap";

const WelcomeView = () => {
	return (
		<div className="welcomeView">
			<Jumbotron fluid>
				<img
					alt=""
					src={logo}
					width="300"
					height="100"
					className="welcome-logo"
				/>
				<h1>Hello and Welcome!</h1>
				<h1>Please login</h1>
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
			</Jumbotron>
		</div>
	);
};

export default WelcomeView;
