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
    <Form inline onSubmit={e => { e.preventDefault();}}>
    <Button href="#" variant="outline-secondary">&laquo; Return</Button>
    <div className="searchArtist">
      <FormControl as='input' type="text" placeholder="Search For Artists, Songs..." 
      onChange={e => onText(JSON.stringify(e.target.value))} />
      
      <Button type='submit' variant="outline-dark" onClick ={onSearch}>Search</Button>
      </div>
    </Form>
	</div>
    )
};

export default SearchViewForm;


export const SearchViewResult = ({searchResult}) =>{
  if(searchResult&&searchResult.hasOwnProperty('tracks', 'items')){
  return(
    <Jumbotron className="jumbo">
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
</Jumbotron>
 );}
}

export const SearchPlaceholderView = ({initialPlaylist}) => {
  return(
    <Jumbotron className="jumbo">
 <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th> # </th>
      <th>Song Title</th>
      <th>Artist</th>
      <th>Add</th>
    </tr>
  </thead>
  <tbody>
  {initialPlaylist.hasOwnProperty('tracks')&&initialPlaylist.tracks.items.map((item, index)=> 
		  <tr key= {item.track.href}>
			<td>{index+1}</td>
			<td>{item.track.name}</td>
			<td>{item.track.artists.map(artists => " / " + artists.name ) } /</td>
      {/*<td>{item.artists.map(artists => " / " + artists.name )} / </td>*/}
      <td><Button variant="outline-light">+</Button></td>
        </tr>
    )}
  </tbody>
</Table>
</Jumbotron>);
}