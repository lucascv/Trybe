import React from 'react';
import { createUser } from '../actions';

import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class createUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }
  cadastro = () => {
    const variavel = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
    }
    this.props.keyUser(variavel);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return (
        <Redirect to="/" />
      );
    } return (
      <div>
        <label htmlFor="nome">Nome</label>
        <input ref={node => this.name = node} id="nome" type="text" />
        <label htmlFor="email">E-mail</label>
        <input ref={node => this.email = node} id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input ref={node => this.password = node} id="password" type="password" />
        <button onClick={() => this.cadastro()}>Cadastrar</button>
        <Link to="/users">Clientes Cadastrados</Link>
      </div>
    );
  }
}

const mapDispatchToProps = {
  keyUser: createUser,
}

export default connect(null, mapDispatchToProps)(createUsers);
