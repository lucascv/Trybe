import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Login from './components/Login';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
          <Route path="/cadastro" component={CreateUser} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
