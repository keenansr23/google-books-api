import React, { Component } from 'react';
import Header from './Components/Header';
import Books from './Components/Books';
import './App.css';
import Instructions from './Components/Instructions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Instructions/>
        <Books/>
      </div>
    );
  }
}

export default App;
