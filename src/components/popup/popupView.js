import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import css from "./popupView.module.css";

const LoginView = () => {
	return (
		<div className={css.popup}>
			<Row>
				<Col sm="auto" md="auto" lg="auto">
					<h1>Please wait</h1>
				</Col>
				<Col sm={2} md={2} lg={2}>
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				</Col>
			</Row>
		</div>
	);
};

export default LoginView;
