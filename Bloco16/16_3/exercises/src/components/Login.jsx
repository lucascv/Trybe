import React from 'react';
import { connect } from 'react-redux';
import { checkLogin } from '../actions';
import { Redirect, Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.validateLogin = this.validateLogin.bind(this);
  }

  validateLogin() {
    console.log(this.props.clientesCadastrados);
    if (this.props.clientesCadastrados.some((cliente) => {
      return cliente.email === this.email.value && cliente.password === this.password.value
    })) return this.props.checkLogin();
  }

  render() {
    const { login } = this.props;
    if (login) {
      return (
        <Redirect to="/users" />
      );
    } return (
      <div>
        <label htmlFor="email">Email</label>
        <input ref={node => this.email = node} id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input ref={node => this.password = node} id="password" type="password" />
        <button onClick={this.validateLogin}>Login</button>
        <Link to="/cadastro" >Cadastrar</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    login: state.InicialReducer.login,
    clientesCadastrados: state.InicialReducer.clientesCadastrados,
  })
}

const mapDispatchToProps = { checkLogin };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
