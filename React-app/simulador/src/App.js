import React, { Component } from 'react';
import Home from './Home';
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
            <Route path="/" component={Home}/>
          </Switch>
        </main>

        


      </div>
    );
  }
}

export default App;
