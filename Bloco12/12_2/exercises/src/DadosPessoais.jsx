import React from 'react';
import FormErrors from './FormErrors';

class DadosPessoais extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      formErrors: { 
        email: '',
        name: '',
        cpf: '',
        endereco: '',
        cidade: '',
      },
    }
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState((state) => (
      {
        [name]: value,
        formErrors: {
          ...state.formErrors,
          [name]: this.validateField(name, value)
        }
      })
    );
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        return isValid ? '' : ' is invalid';
      case 'name':
        return '';
      case 'cpf':
        return '';
      case 'endereco':
        return '';
      case 'cidade':
        return '';
      default:
        break;
    }
  }

  verificaCidade(event) {
    const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    lista.forEach((numero) => numero === event.target.value[0] ? this.setState({ cidade: '' }) : console.log(event.target.value[0]));
  }

  render() {
    return (
      <form>
        <fieldset>
          <div>
            <label htmlFor="name">
              Nome
              <input
                type="text"
                maxLength="40"
                name="name"
                value={this.state.name.toUpperCase()}
                onChange={this.changeHandler}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              E-mail
              <input
                type="email"
                maxLength="50"
                name="email"
                onChange={this.changeHandler}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="cpf">
              CPF
              <input
                type="text"
                name="cpf"
                maxLength="11"
                onChange={this.changeHandler}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="endereco">
              Endereço
              <input
                type="text"
                name="endereco"
                maxLength="200"
                value={this.state.endereco.replace(/[^\w\s]/gi, '')}
                onChange={this.changeHandler}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="cidade">
              Cidade
              <input
                type="text"
                maxLength="28"
                name="cidade"
                value={this.state.cidade}
                onBlur={this.verificaCidade}
                onChange={this.changeHandler}
                required
              />
            </label>
          </div>
        </fieldset>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </form>
    );
  }
}

export default DadosPessoais;
