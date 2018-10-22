import React, { Component } from 'react';

import jhawk from './jhawk.png';
import Starscape_blueBG from './Starscape_blueBG.jpg'
import revJHawk from './jhawk-favicon-reverse.png'
import './App.css';
import Search from './components/search';
import Details from './components/details';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={jhawk} className="App-KU" alt="jhawk" />
          <img src={Starscape_blueBG} className="Starscape_blueBG" alt="Starscape_blueBG" />
          <img src={revJHawk} ClassName="App-header" alt="left angry jayhawk" />
          
        </header>
        <Search />
        
      </div>
    );
  }
}

export default App;
