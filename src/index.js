import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App';
import * as reducers from './reducers';

// Storeの生成
const store = createStore(
  combineReducers(reducers),
  //Redux Middlewareにredux-loggerを設定
  applyMiddleware(logger)
);

ReactDOM.render(
  // storeをAppコンポーネントに紐付け
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
