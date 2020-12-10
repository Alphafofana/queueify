/**
 * searchView.js
 * Authors: Marta Hansbo, Laila Arman, Ella Söderberg, Alpha Fofana
 * 
 * Search view.
 * 
 */

import React from "react";
import {Button, FormControl, Form, Container, Table, Col} from "react-bootstrap";
import css from "./search.module.css";



const SearchViewForm =({onText, onSearch}) => {

	return(
	<div className={css.searchMenu}>
    <Form inline onSubmit={e => { e.preventDefault();}}>
    <div className={css.searchBar}>
      <FormControl as='input' type="text" placeholder="Search For Artists, Songs..." 
      onChange={e => onText(JSON.stringify(e.target.value))} /> {" "}
      <Button type='submit' variant="outline-light" onClick ={onSearch}>Search</Button>
      </div>
    </Form>
	</div>
    )
};

export default SearchViewForm;


export const SearchViewResult = ({searchResult}) =>{
 return(
   //<div className={css.result}>
  <Container className={css.searchJumbo}>
    <Col>
 <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Song Title</th>
      <th>Artist</th>
      <th>Add</th>
    </tr>
  </thead>
  <tbody>
    {
    searchResult&&searchResult.hasOwnProperty('tracks', 'items')&&searchResult.tracks.items.map(item =>
        <tr key= {item.href}>
          <td>{item.name}</td>
        <td>{item.artists.map(artists => " / " + artists.name )} / </td>
            <td><Button variant="outline-light">+</Button></td>
        </tr>
    )}
  </tbody>
</Table>
</Col>
</Container>
//</div>
 );
}
