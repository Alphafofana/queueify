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
          Authorization: "Bearer " + "BQAYizhq_U5-t23f9jO9_yfor2w91b8Tn2ds75quciLxLRW3lHk8dvQM8ftSC0rABVBJTREh5MNmWaF59NzjHVvdxhkD3lBVTFu9CMyb5LUn4OCoYdFqKQMxVMZIrq0j5pWXXVhE",
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