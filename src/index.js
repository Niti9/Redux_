import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { accountReducer } from "./reducers/account";
// import { bonusReducer } from "./reducers/bonus";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
import { Provider } from 'react-redux';

//these are import for redux toolkit
import { configureStore} from "@reduxjs/toolkit";
import  accountReducer  from "./slices/accountSlice";
import bonusReducer  from "./slices/bonusSlice";
import rewardReducer from "./reducers/rward";
import { adminApi } from "./api/adminSlice";
// import rewardReducer from "./reducers/reward";

//creating store in reduxtoolkit
//here reducer create inside object 'configureStore'
const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer,
    //it is a key of adminApi in square bracket
    //phir yahan admin name ki state ban jaayegi jismein reducer aa jaayega
    [adminApi.reducerPath]: adminApi.reducer  
  },
  //in reduxjs toolkit there is already thunk,logger are present but 
  //for reduxjsToolkit we have to add middleware 
  middleware: (GetDefaultMiddleware) =>
  //yahan middleware mein kya hai kaise hai wo sab 'adminApi' ke andar hai
  GetDefaultMiddleware().concat(adminApi.middleware),

});

// //to make Store
// const store = createStore(
//   combineReducers({ //it is like we made reducer in test.js file
//       account: accountReducer,
//       bonus: bonusReducer
//   }),
//   // applyMiddleware(logger.default, thunk.default)); // using logger because it is a middleware
//   // ab hum bina default ke use karenge warna "middleware is not a function error aayega"
//   applyMiddleware(logger, thunk)); // using logger because it is a middleware

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* provider ko app ke upar niche lagane 
    jaruri hai taaki store usse provide kiya jaa sake */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
