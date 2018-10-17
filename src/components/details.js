import React, { Component } from 'react';
import './details.css';

class Details extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    
  
    render() {
      return (
        <div className = "movie-Poster">
          this is where the move details go.
        </div>
      );
    }
  }

export default Details;