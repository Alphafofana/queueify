/**
 * searchView.js
 * Authors: Marta Hansbo, Laila Arman, Ella Söderberg, Alpha Fofana
 *
 * Search view.
 *
 */

import React from "react";
import css from "./search.module.css";
import {
	Modal,
	Button,
	FormControl,
	Form,
	Jumbotron,
	Table,
} from "react-bootstrap";

const SearchViewForm = ({ onText, onSearch }) => {
	return (
		<div className={css.searchMenu}>
			<Form
				inline
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<Button
					className={css.serachReturn}
					href="#"
					variant="outline-secondary"
				>
					&laquo; Return
				</Button>
				<div className={css.searchBar}>
					<FormControl
						as="input"
						type="text"
						placeholder="Search For Artists, Songs..."
						onChange={(e) => onText(JSON.stringify(e.target.value))}
					/>

					<Button
						type="submit"
						variant="outline-dark"
						onClick={onSearch}
					>
						Search
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default SearchViewForm;

export const SearchViewResult = ({
	searchResult,
	addsong,
	disable,
	disabledButtons,
	handleShowError,
	showError,
}) => {
	return (
		<div className="searchResult">
			<Jumbotron className={css.searchJumbo}>
				<Table striped bordered hover variant="dark">
					<thead>
						<tr>
							<th>Song Title</th>
							<th>Artist</th>
							<th>Add</th>
						</tr>
					</thead>
					<tbody>
						{searchResult &&
							searchResult.hasOwnProperty("tracks", "items") &&
							searchResult.tracks.items.map((song, index) => (
								<tr key={song.href}>
									<td>{song.name}</td>
									<td>
										{song.artists.map(
											(artists, index) =>
												((index !== 0 && ", ") || "") +
												artists.name
										)}{" "}
									</td>
									<td>
										<Button
											onClick={(e) => {
												e.preventDefault();
												disable(index);
												addsong(song).catch((error) => {
													console.error(
														"Could not add song:"
													);
													//TODO: check errortype
													handleShowError();
												});
											}}
											variant="outline-light"
											disabled={disabledButtons.includes(
												index
											)}
										>
											+
										</Button>
									</td>
								</tr>
							))}
					</tbody>
				</Table>
			</Jumbotron>
			<Modal
				size="sm"
				show={showError}
				onHide={handleShowError}
				animation={false}
				keyboard
			>
				<Modal.Header closeButton>
					<Modal.Title>Song Already exists!</Modal.Title>
				</Modal.Header>
			</Modal>
		</div>
	);
};
