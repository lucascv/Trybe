import { CREATE_USER, CHECK_LOGIN, DELETE_USER } from '../actions';

const INITIAL_STATE = {
  clientesCadastrados: [{ name: 'Toninho da Padaria', password: 'pao', email: 'pao@pao.pao'}],
  login: false,
}

export default (state = INITIAL_STATE, action) => {
  if (action.type === CREATE_USER) {
    return {
      ...state,
      clientesCadastrados: [...state.clientesCadastrados, {...action.payload}]
    };
  } else if (action.type === CHECK_LOGIN) {
    return {
      ...state,
      login: true,
    }
  } else if (action.type === DELETE_USER) {
    return {
      clientesCadastrados: [...action.payload],
    }
  } else {
    return state;
  }
}
