/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import reducer, { initialState } from './reducer';

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
