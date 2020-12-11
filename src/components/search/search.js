/**
 * search.js
 * Authors: Marta Hansbo, Laila Arman, Ella Söderberg, Alpha Fofana
 *
 * Presenter for search view.
 *
 */

import React, { useState, useEffect } from "react";
import SearchViewForm, { SearchViewResult } from "./searchView";
import DataSource from "../../dataSource";
import usePromise from "../usePromise";
import PromiseNoData from "../promiseNoData";

function Search({ model }) {
	const [query, setQuery] = useState("");
	const [search, setSearch] = useState(null);
	const [disabledButtons, setDisabled] = useState([]);
	const [showError, setShowError] = useState(false);
	const sessionID = model.getModelProperty("currentSession");

	useEffect(() => setSearch(DataSource.searchSong(sessionID)), [sessionID]);

	const [data, error] = usePromise(search);
	const handleShowError = () => setShowError(!showError);
	const handleDisabledButtons = (disable) =>
		setDisabled([...disabledButtons, disable]);

	return (
		<>
			<SearchViewForm
				onText={(query) => setQuery(query)}
				onSearch={() =>
					setSearch(DataSource.searchSong(sessionID, query))
				}
			/>

			{PromiseNoData(search, data, error) || (
				<SearchViewResult
					searchResult={data}
					addsong={(songObj) => model.addSong(songObj)}
					disable={handleDisabledButtons}
					disabledButtons={disabledButtons}
					handleShowError={handleShowError}
					showError={showError}
				/>
			)}
		</>
	);
}
export default Search;
