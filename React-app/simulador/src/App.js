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
            <Route path="/Users/:Id" render={
              (props) => <Users {...props} greetingMessage='Good Morning' />
            } />
            <Route path="/users" render={
              (props) => <Users {...props} greetingMessage='Good Morning' />
            } />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>




      </div>
    );
  }
}

export default App;
