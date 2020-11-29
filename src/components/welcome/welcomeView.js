import React from "react";
import logo from "../../assets/queueify_logo3.svg";
import background from "../../assets/unsplash-background2.jpg";
import { Modal, Jumbotron, Button } from "react-bootstrap";
import css from "./welcomeView.module.css";

const welcomeView = ({
	loginhost,
	loginguest,
	loading,
	handleShowGuesLogin,
	handleShowHostLogin,
	showGuestLogin,
	showHostLogin,
}) => {
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
						disabled={loading}
						variant="success"
						onClick={handleShowGuesLogin}
					>
						Login as Guest
					</Button>
				</p>
				<p>
					<Button
						disabled={loading}
						variant="success"
						onClick={handleShowHostLogin}
					>
						Login as Host
					</Button>
				</p>
				<a href="url">Create new account</a>
			</Jumbotron>

			<Modal
				dialogClassName={css.modal}
				show={showGuestLogin}
				onHide={handleShowGuesLogin}
				keyboard
			>
				<Modal.Header closeButton>
					<Modal.Title>Login as Guest </Modal.Title>
				</Modal.Header>
				<Modal.Body>Please select a sign-in method below</Modal.Body>
				<Modal.Footer>
					<Button
						className="mr-auto"
						variant="secondary"
						onClick={handleShowGuesLogin}
					>
						Close
					</Button>
					<Button
						className="mr-auto"
						variant="primary"
						disabled={loading}
						onClick={(e) => {
							//TODO: Fix Warning: findDOMNode is deprecated
							handleShowGuesLogin();
							loginguest(e, "google");
						}}
					>
						<i className="fab fa-google" /> Google
					</Button>
					<Button
						className="mr-auto"
						variant="primary"
						disabled={loading}
						onClick={(e) => {
							//TODO: Fix Warning: findDOMNode is deprecated
							handleShowGuesLogin();
							loginguest(e, "facebook");
						}}
					>
						<i className="fab fa-facebook-square" /> Facebook
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal size="sm" show={showHostLogin} onHide={handleShowHostLogin}>
				<Modal.Header closeButton>
					<Modal.Title>Login as Host</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					You will need a Spotify account to host a queueify session.
					If you dont have one plese visit their website. Please sign
					in below
				</Modal.Body>
				<Modal.Footer>
					<Button
						className="mr-auto"
						variant="secondary"
						onClick={handleShowHostLogin}
					>
						Close
					</Button>
					<Button
						className="mr-auto"
						variant="outline-success"
						onClick={handleShowHostLogin}
					>
						<i class="fab fa-spotify"></i> Spotify
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default welcomeView;
