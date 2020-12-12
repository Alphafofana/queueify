import React from "react";
import { Container, Spinner } from "react-bootstrap";

function PromiseNoData(promise, data, error, h) {
	return (
		(!promise && "no data") || // case "0"
		(error && <h1>error</h1>) || // case 3
		(!data && (
			<Container className="searchJumbo">
				<Spinner animation="border" role="status" variant="light">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</Container>
		))
	); // case 1
}

export default PromiseNoData;
