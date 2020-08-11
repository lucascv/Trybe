import { createStore, combineReducers } from 'redux';
import InicialReducer from '../reducers/InicialReducer';

const reducer = combineReducers({
  InicialReducer,
})

const store = createStore(reducer);

export default store;
