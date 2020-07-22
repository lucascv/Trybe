import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Pokedex />
      </BrowserRouter>
    );
  }
}

export default App;
