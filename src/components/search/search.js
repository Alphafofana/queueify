/**
 * search.js
 * Authors: Marta Hansbo, Laila Arman, Ella Söderberg, Alpha Fofana
 *
 * Presenter for search view.
 *
 */

import React, { useState, useEffect } from "react";
import SearchViewForm, { SearchViewResult } from "./searchView";
import { useHistory } from "react-router-dom";
import DataSource from "../../dataSource";
import usePromise from "../usePromise";
import PromiseNoData from "../promiseNoData";

function Search({ model }) {
	const [query, setQuery] = useState("");
	const [search, setSearch] = useState(null);
	//const [disabledButtons, setDisabled] = useState([]);
	const [showError, setShowError] = useState(false);
	const sessionID = model.getModelProperty("currentSession");

	useEffect(() => setSearch(DataSource.searchSong(sessionID)), [sessionID]);

	const [data, error] = usePromise(search);
	const handleShowError = () => setShowError(!showError);
	// const handleDisabledButtons = (disable) =>
	// 	setDisabled([...disabledButtons, disable]);
	const [playlistPromise, setPlaylist] = useState();
	const history = useHistory();
	useEffect(() => {
		if (model.getModelProperty("currentSession")) {
			const obs = () => setPlaylist(model.getCurrentPlaylist());
			return model.addObserver(obs);
		} else {
			history.push("/session");
		}
	}, [model, history]);

	const [playlist, playlistError] = usePromise(playlistPromise);

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
					playlist={playlist}
					error={playlistError}
					//disable={handleDisabledButtons}
					//disabledButtons={disabledButtons}
					handleShowError={handleShowError}
					showError={showError}
				/>
			)}
		</>
	);
}
export default Search;
