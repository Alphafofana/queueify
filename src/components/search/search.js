import React from "react";
import SearchView from "./searchView"; 
const { default: searchView } = require("./searchView");


function Search({}){
    const [query, setQuery]= React.useState("");
    const [promise, setPromise]= React.useState(null);

return(
   <SearchView
   onText = { x => setQuery(x)  }
   onSearch ={ () => setPromise() }
   addTrack = {track=> addSong(track) } //add song function in model 
   
   />	
    ); 
}
export default Search;