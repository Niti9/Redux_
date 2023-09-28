import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {accountReducer} from './reducers/account';
import {bonusReducer} from './reducers/bonus';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


//to make Store
const store = createStore(
  combineReducers({ //it is like we made reducer in test.js file
      account: accountReducer,
      bonus: bonusReducer
  }),
  // applyMiddleware(logger.default, thunk.default)); // using logger because it is a middleware
  // ab hum bina default ke use karenge warna "middleware is not a function error aayega"
  applyMiddleware(logger, thunk)); // using logger because it is a middleware


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  store = {store}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
