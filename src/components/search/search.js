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
    /*const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
  
    function searchSong(e) {
      e.preventDefault();
      fetch("https://api.spotify.com/v1/search?q=" + query + "&type=track", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + "BQADTC0Q510-ekD42AV1fSegIsr6SihUoqecwEuFljrK0VyVoyCQHJZk2fHpFdHFBgA3pAxzK85G0ExvzXnQ7GBK9Z8pn17sgUwi5W9Zy0GXBpI0wVaubE2e85USGHHrkL4L4ETZ",
        },
      })
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
        console.log(items);
    }  */
    
    React.useEffect(()=>setPromise(dataSource.searchSong('carola')),
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