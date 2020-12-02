/**
 * searchView.js
 * Authors: Marta Hansbo, Laila Arman, Ella Söderberg, Alpha Fofana
 * 
 * Search view.
 * 
 */

import React from "react";
import {Button, FormControl, Form, Jumbotron, Table} from "react-bootstrap";

const SearchViewForm =({onText, onSearch}) => {
	return(
	<div className="searchView">
    <Form inline>
    <Button href="#" variant="outline-secondary">&laquo; Return</Button>
    <div className="searchArtist">
      <FormControl as='input' type="text" placeholder="Search For Artists" className="mr-sm-2" 
      onChange={e => onText(JSON.stringify(e.target.value))} />
      
      <Button variant="outline-dark" onClick ={onSearch} >Search</Button>
      </div>
    </Form>
	</div>
    )
};

export default SearchViewForm;


export const SearchViewResult = ({searchResult}) =>{
 return(
    <Jumbotron className="jumbo">
 <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Artist</th>
      <th>Song Title</th>
      <th>Add</th>
    </tr>
  </thead>
  <tbody>
    {
    searchResult&&searchResult.map(item =>
        <tr>
        <td>{item.artists.map(artists => artists.name )}</td>
            <td>{item.name}</td>
            <td><button>+</button></td>
        </tr>
    )}
  </tbody>
</Table>
</Jumbotron>
 );
}
