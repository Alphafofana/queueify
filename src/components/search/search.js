import React from "react";
import SearchView from "./searchView"; 
const { default: searchView } = require("./searchView");


function Search({}){
    const [query, setQuery]= React.useState("");
    const [promise, setPromise]= React.useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    function searchSong(e) {
      e.preventDefault();
      fetch("https://api.spotify.com/v1/search?q=" + query + "&type=track", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + "BQA8ZdlFG49N6iHu_m2kq5rEmv-HM103eCeumOncmFxqHCvkKOKzKYFDz0t2fVexWnp2JQQPKN9NHXE_0suaEd4VEkq0BY9sJt6JiTmLkv7qgbbzjJU_i2mSiCw1Vl0L1HYizADVbzQrjhk2UsIBcH3Gd3mxtgYru3PAjBErbiWCC6I8EluqYOJZblx2bEMpqBOGyA",
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
   onText = { x => setQuery(x)  }
   onSearch ={ () => setPromise() }
   addTrack = {track=> addSong(track) } //add song function in model 
   
   />	
    ); 
}
export default Search;