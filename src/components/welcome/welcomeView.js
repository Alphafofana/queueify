import React from "react";
import logo from "../../assets/queueify_logo3.svg";
import background from "../../assets/unsplash-background2.jpg";
import { Jumbotron, Button } from "react-bootstrap";
import css from "./welcomeView.module.css";



const welcomeView = ({ loginhost, loginguest }) => {

	return (
		<div className={css.welcomePage}>
			<Jumbotron
				fluid
				style={{
					backgroundSize: "cover",
					backgroundImage: "url(" + background + ")",
					margin: 0,
					minHeight: "100vh",
				}}
			>
				<img
					alt=""
					src={logo}
					width="300"
					height="100"
					className={`${css.welcomeLogo} "mb-0"`}
				/>

				<div className={css.headerWelcome}>
					<h1>Welcome!</h1>
					<p>Login</p>
				</div>

				<p>
					<Button
						variant="success"
						onClick={() => {
							loginguest();
							document.location.reload();
						}}
					>
						Login as Guest
					</Button>
				</p>
				<p>
					<Button
						variant="success"
						onClick={() => {
							loginhost();
							document.location.reload();
						}}
					>
						Login as Host
					</Button>
				</p>
				<a href="url">Create new account</a>
			</Jumbotron>
		</div>
	);
};

export default welcomeView;
