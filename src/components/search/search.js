/**
 * search.js
 * Authors: Marta Hansbo, Leila Arman, Ella Söderberg, Alpha Fofana
 * 
 * Presenter for search view.
 * 
 */

import React from "react";
import SearchView from "./searchView"; 
const { default: searchView } = require("./searchView");


function Search({}){
    const [query, setQuery]= React.useState("");
    const [promise, setPromise]= React.useState(null);
    const [error, setError] = React.useState(null);
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
    }  
    /*
    React.useEffect(()=>setPromise(searchSong({})),
     []);

    const [data, errorp]= usePromise(promise);*/

    function addSong(track) {
      return track;
    }

return(
   <SearchView
   items = {items.items}
   onText = { x => setQuery(x)  }
   onSearch ={ (e) => searchSong(e) }
   addTrack = {track=> addSong(track) } //add song function in model 
   />	
    ); 
}
export default Search;