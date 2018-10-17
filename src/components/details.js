import React, { Component } from 'react';
import './details.css';

class Details extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      
      /*
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      */
    }
  
/*    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
*/
    
  
    render() {
      return (
        <div className = "movie-Details">
          <div className = "movie-Poster">
          need code to load poster
          </div>
          <div className = "move-NameH">
          Movie:
          </div>
          <div className = "movie-Name">
          need code to display name of movie
          </div>
          <div className = "move-ReleaseH">
          Release:
          </div>
          <div className = "movie-Release">
          need code to display release date
          </div>
          <div className = "move-ActorH">
          Actor: Role:
          </div>
          <div className = "move-Photo">
          need code to display photo
          </div>
          <div className = "movie-Actor">
          need code to display Actor
          </div>
          <div className = "actor-Role">
          need code to display roleName
          </div>
          <div className = "actor-Details">
          need code to display actor details
          </div>
          <div className = "movie-GenreH">
          Genre:
          </div>
          <div className = "movie-Genre">
          need code to display genre
          </div>
          <div className = "movie-LanguageH">
          Language:
          </div>
          <div className = "movie-Language">
          need code to display Language
          </div>
          <div className = "movie-DirectorH">
          Director:
          </div>
          <div className = "movie-Director">
          need code to display Director
          </div>
          <div className = "movie-StudioH">
          Studio:
          </div>
          <div className = "movie-Studio">
          need code to display Studio
          </div>
          <div className = "movie-PlotH">
          Plot:
          </div>
          <div className = "movie-Plot">
          need code to display Plot
          </div>
        </div>
      );
    }
  }

export default Details;