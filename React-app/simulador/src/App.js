import React, { Component } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Link to="/" > Home </Link>
        <li><Link to="/about" /> About </li>
        <li><Link to="/users" /> Users </li>
      </div>
    );
  }
}

export default App;
