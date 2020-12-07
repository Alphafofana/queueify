import React from "react";
import { Jumbotron, Spinner } from "react-bootstrap";
import css from "./search.module.css";

function PromiseNoData(promise, data, error, h) {
	return (
		(!promise && "no data") || // case "0"
		(error && <h1>error</h1>) || // case 3
		(!data && (
			<Jumbotron className={css.jumbo}>
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</Jumbotron>
		))
	); // case 1
}

export default PromiseNoData;
