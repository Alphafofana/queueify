import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import DataSource from "./dataSource";

const DataSourceTest = () => {
	return (
		<Container>
			{/*Enter functionnames to be tested*/}
			{[
				"searchSong",
				"getPlaylist",
				"createPlaylist",
				"changePlaylistOrder",
				"deleteSong",
				"addSong",
			].map((call, index) => (
				<Row key={call} style={{ marginTop: "10px" }}>
					<Col lg="auto">
						<form
							onSubmit={(e) => {
								e.preventDefault();
								const query = document.getElementById(
									"query" + call
								);
								console.log(
									call + " search query: " + query.value
								);
								DataSource[call](query.value)
									.then((result) => console.log(result))
									.catch((err) => {
										console.error(err);
									});
							}}
						>
							{""}
							<input
								id={`query${call}`}
								type="text"
								placeholder={`Enter ${call} query`}
							/>
							<Button type="submit">Submit {call} request</Button>
						</form>
					</Col>
				</Row>
			))}
		</Container>
	);
};
export default DataSourceTest;
