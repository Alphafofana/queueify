/**
 * search.js
 * Authors: Marta Hansbo, Laila Arman, Ella Söderberg, Alpha Fofana
 *
 * Presenter for search view.
 *
 */

import React, { useState, useEffect }  from "react";
import SearchViewForm, { SearchPlaceholderView, SearchViewResult } from "./searchView";
import dataSource from "../../dataSource";
import usePromise from "../usePromise";
import PromiseNoData from "../promiseNoData";
import { getStaticPlaylist } from "../../dataSourceTest";

function Search() {
	const [query, setQuery] = useState("");
	const [promise, setPromise] = useState(null);

	useEffect(() => setPromise(dataSource.searchSong("")), []);
	const [searchData, searchError] = usePromise(promise);

	const staticPlaylist = getStaticPlaylist();
	console.log(query, searchData);

	return (
		<>
			<SearchViewForm
				onText={(x) => {setQuery(x)}}
				onSearch={() => setPromise(dataSource.searchSong(query))}
			/>
			{ ((!searchData||searchData.hasOwnProperty('error'))&&(
			<SearchPlaceholderView initialPlaylist={staticPlaylist}/>
			)) || 
			(PromiseNoData(promise, searchData, searchError) || (
				<SearchViewResult searchResult={searchData} />
			))}
		</>
	);
}
export default Search;
