import React from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';
import './css/reset.css';

import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
const ReduxThunk = require('redux-thunk').default;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(<App store={store} />, rootElement);
} else {
  throw new Error('Could not find root element to mount to!');
}
