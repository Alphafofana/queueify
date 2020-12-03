/**
 * search.js
 * Authors: Marta Hansbo, Laila Arman, Ella Söderberg, Alpha Fofana
 * 
 * Presenter for search view.
 * 
 */

import React from "react";
import SearchViewForm, { SearchViewResult} from "./searchView"; 
import dataSource from "../../dataSource";
import usePromise from "./usePromise";
import PromiseNoData from "./promiseNoData";



function Search(){
    const [query, setQuery]= React.useState("");
    const [promise, setPromise]= React.useState(null);
    
    React.useEffect(()=>setPromise(dataSource.searchSong('')),
     []);

    const [data, error]= usePromise(promise);


return(<React.Fragment>
   <SearchViewForm
   onText = { x => setQuery(x)  }
   onSearch ={ () =>setPromise(dataSource.searchSong(query))}
   />
   {PromiseNoData(promise, data, error)}<SearchViewResult
   searchResult = {data}
   />	
   </React.Fragment>
   ); 
}
export default Search;