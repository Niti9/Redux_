/** this code  is taken from coder dost redux video and time is 1:57:34 seconds from the video*/

/** REACT REDUX */
//Here we try to make "global state " to "redux"
//"useSelector " help to access state from React
//"useDispatch" change state from anywhere 








// import './App.css';
// // import AddProduct from './AddProduct';
// import ProductList from './ProductList';
// import axios from 'axios';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import { Router } from 'express';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<ProductList></ProductList>
//   },
//   {
//     path:"/add",
//     element:<AddProduct></AddProduct>
//   }
// ]);

// function App() {
//   return (
//     <RouterProvider router = {router}/>
//   );
// }

// export default App;

/** starting of REACT-REDUX
 * here we try to connect the react with redux and use easily
 */

// first code but it can't change value

// import "./App.css";
// import Account from "./components/Account";
// import Bonus from "./components/Bonus";
// function App() {
//   return (
//     <div className="App">
//       <h4> App</h4>
//       <h3> Current Amount : </h3>
//       <h3> Total Bonus : </h3>

//       <Account></Account>
//       <Bonus></Bonus>
//     </div>
//   );
// }

// export default App;










// //Now we try to pass prop from
// //App.js to account and bonus.js

// import "./App.css";
// import { useState } from "react";
// import Account from "./components/Account";
// import Bonus from "./components/Bonus";

// function App() {

//   // create all useState hooks here
//   const [account, setAccount] = useState({ amount: 0 });
//   const [bonus, setBonus] = useState({ points: 0 });

//   //also import here function from account.js
//   const increment = () => {
//     setAccount({ amount: account.amount + 1 });
//   };

//   const decrement = () => {
//     setAccount({ amount: account.amount - 1 });
//   };

//   const incrementByAmount = (value) => {
//     setAccount({ amount: account.amount + value });
//   };



//   const incrementBonus = () => {
//     setBonus({ points: bonus.points + 1 });
//   };



//   return (


//     <div className="App">
//       <h4> App</h4>
//       <h3> Current Amount : {account.amount}</h3>
//       <h3> Total Bonus : {bonus.points} </h3>

//       <Account
//         increment={increment}
//         decrement={decrement}
//         incrementByAmount={incrementByAmount}
//         account={account}
//       ></Account>
//       <Bonus 
//       incrementBonus={incrementBonus}
//       bonus={bonus}
//       ></Bonus>
//     </div>
//   );
// }

// export default App;










//now we will take data from reducers 
//because globally data will share 
// in index.js we given store as globally

// import "./App.css";
// import { useState } from "react";
// import Account from "./components/Account";
// import Bonus from "./components/Bonus";

// // pass store prop here 
// function App({store}) {

//   // create all useState hooks here
//   const [account, setAccount] = useState({ amount: 0 });
//   const [bonus, setBonus] = useState({ points: 0 });

//   //also import here function from account.js
//   const increment = () => {
//     setAccount({ amount: account.amount + 1 });
//   };

//   const decrement = () => {
//     setAccount({ amount: account.amount - 1 });
//   };

//   const incrementByAmount = (value) => {
//     setAccount({ amount: account.amount + value });
//   };



//   const incrementBonus = () => {
//     setBonus({ points: bonus.points + 1 });
//   };



//   return (


//     <div className="App">
//       <h4> App</h4>
//       {/* getState used for globally access the store data */}
//       <h3> Current Amount : {store.getState().account.amount}</h3>
//       <h3> Total Bonus : {store.getState().bonus.points} </h3>

//       <Account
//         increment={increment}
//         decrement={decrement}
//         incrementByAmount={incrementByAmount}
//         account={account}
//       ></Account>
//       <Bonus 
//       // store index.js se yahan bonus tak pahunchane bhi jaruri
//       //hai uske liye yahan pass karna padega
//       store = {store}
//       // ab yahan niche ke extra code ki jarurat nahi hai
//       ></Bonus>
//     </div>
//   );
// }

// export default App;














// Ab suru hoga React-redux through importing library 
// aur kuch chize jaise store aur dispatch ko edit or change 
//kar sakenge iss library se 


import { useSelector } from "react-redux";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {

  // ab  useSelector aur useDispatch 
  // Provider se deta hai 

  const amount = useSelector(state=>state.account.amount)
  const point = useSelector(state=>state.bonus.points)

  return (

    <div className="App">
      <h4> App</h4>
      {/* getState used for globally access the store data */}
      <h3> Current Amount : {amount}</h3>
      <h3> Total Bonus : {point} </h3>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
