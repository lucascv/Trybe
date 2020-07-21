import React, { Component } from 'react';

import Home from './Home';
import About from "./About";
import Users from "./Users";

import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="/" > Home </Link>
            <Link to="/about" > About </Link>
            <Link to="/users" > Users </Link>
          </nav>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/users" component={Users}/>
          </Switch>
        </main>

        


      </div>
    );
  }
}

export default App;
