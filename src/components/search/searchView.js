import React from "react";
import {Button, FormControl, Form, Jumbotron} from "react-bootstrap";

const searchView =({onText,onSearch,addTrack}) => {
	return(
	<div className="searchView">
  <body className="search">
  <a href="#" class="previous">&laquo; Previous</a>
      
    <Form inline>
    <div className="searchArtist">
      <FormControl as='input' type="text" placeholder="Search For Artists" className="mr-sm-2" 
      onChange={e => onText(e.target.value)} />
      
      <Button variant="outline-info" onClick ={() => onSearch()} >Search</Button>
      </div>
    </Form>
   
 <Jumbotron className="jumbo">
  <ul>
<li>Selena Gomez<button class="add">+</button></li>
<li>Britney Spears<span class="add">+</span></li>
<li>Charlie Puth<span class="add">+</span></li>
<li>Imagine Dragons<span class="add">+</span></li>
</ul>
</Jumbotron>

    </body>
		</div>
    )
};

export default searchView; 