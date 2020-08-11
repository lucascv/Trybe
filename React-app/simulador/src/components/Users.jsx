import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../actions';


class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderedList: [],
      ordered: false,
    }
  }
  deletar = () => {
    console.log(document.querySelector('span'));
    // const { clientesCadastrados } = this.props;
    // const variavel = clientesCadastrados.filter(cliente => cliente.email !== )
  }

  orderList = () => {
    const listaOrdenada = this.props.clientesCadastrados.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log(listaOrdenada);
  }

  render() {
    const { login, clientesCadastrados } = this.props;
    if (login) {
      return (
        <div>
          <button onClick={() => this.orderList()}>Ordenar</button>
          {clientesCadastrados.map((cliente, i) => (
              <div key={i}>
                <span>{cliente.name}</span>
                <span>{cliente.email}</span>
                <button onClick={() => this.deletar()}>X</button>
              </div>
          ))}
        </div>
      );
    }
    
    return (
      <div>Login não efetuado</div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    login: state.InicialReducer.login,
    clientesCadastrados: state.InicialReducer.clientesCadastrados,
  })
}

const mapDispatchToProps = {
  keyDelete: deleteUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
