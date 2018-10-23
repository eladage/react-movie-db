import React, { Component } from 'react';
import './details.css';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch('/api/movies')
      .then(res => res.json())
      .then(movies => this.setState({movies}, () => console.log('Movies fetched...', movies)));
  }
    
  
render() {
  return (
    <div>
      <h3>Movies</h3>
      <ul>
      {this.state.movies.map(movies => 
        <li key={movies.id}>{movies.MovieName}</li>
      )}
      </ul>
    </div>
  );
}
}


export default Details;