/**
 * searchView.js
 * Authors: Marta Hansbo, Laila Arman, Ella Söderberg, Alpha Fofana
 * 
 * Search view.
 * 
 */

import React from "react";
import {Button, FormControl, Form, Jumbotron, Table} from "react-bootstrap";

const searchView =({items, onText, onSearch, addTrack}) => {
	return(
	<div className="searchView">
    <Form inline>
    <Button href="#" variant="outline-secondary">&laquo; Return</Button>
    <div className="searchArtist">
      <FormControl as='input' type="text" placeholder="Search For Artists" className="mr-sm-2" 
      onChange={e => onText(e.target.value)} />
      
      <Button variant="outline-dark" onClick ={onSearch} >Search</Button>
      </div>
    </Form>
   
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
    items&&items.map(item =>
        <span>
        <tr>
            <td>{item.map(artists => artists.name)}</td>
            <td>{item.name}</td>
            <td><button>x</button></td>
        </tr>
        </span>
    )}
  </tbody>
</Table>
</Jumbotron>

	</div>
    )
};

export default searchView; 