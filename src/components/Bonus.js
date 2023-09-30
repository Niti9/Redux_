
//first code of Bonus.js  after it will change

// import { useState } from "react";

// function Bonus() {
//   const [bonus, setBonus] = useState({ points: 0 });

//   const increment = () => {
//     setBonus({ points: bonus.points + 1 });
//   };

//   return (
//     <div className="card">
//       <div className="container">
//         <h4>
//           <b>Bonus Component</b>
//         </h4>
//         <h3>Total point : {bonus.points}</h3>
//         <button onCick={increment}>Increment</button>
//       </div>
//     </div>
//   );
// }

// export default Bonus;









//Second code where we remove some code of line 
//and write in app.js

// import { useState } from "react";

// function Bonus({incrementBonus, bonus}) {
 
//   return (
//     <div className="card">
//       <div className="container">
//         <h4>
//           <b>Bonus Component</b>
//         </h4>
//         <h3>Total point : {bonus.points}</h3>
//         <button onClick={incrementBonus}>Increment + </button>
//       </div>
//     </div>
//   );
// }

// export default Bonus;







//Third code 
//here we change some code and using prop "store"
//from index.js to app.js then here used 



// import {incrementBonus } from '../actions';
// function Bonus({store}) {
 
//   return (
//     <div className="card">
//       <div className="container">
//         <h4>
//           <b>Bonus Component</b>
//         </h4>
//         {/* yahan globally getState work karega */}
//         <h3>Total point : {store.getState().bonus.points}</h3>
        
//         {/* yahan  incrementBonus ACTION ko dispatch ki help 
//         se reducer tak apne aap pahunchayega */}
//         <button onClick={()=>store.dispatch(incrementBonus())}>Increment + </button>
//       </div>
//     </div>
//   );
// }

// export default Bonus;










// Ab suru hoga React-redux through library


import { useDispatch, useSelector } from 'react-redux';
import {incrementBonus } from '../actions';
function Bonus() {
 
//here we use "useSelector()" to make record
//or remember the state like increment,decrement etc
// and "useDispatch()" used to dispatch the data 

const amount = useSelector(state=>state.account.amount)
const point = useSelector(state=>state.bonus.points)
const dispatch = useDispatch();


  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        {/* yahan globally getState work karega */}
        <h3>Total point : {point}</h3>
        
        {/* yahan  incrementBonus ACTION ko dispatch ki help 
        se reducer tak apne aap pahunchayega */}
        <button onClick={()=>dispatch(incrementBonus())}>Increment + </button>
      </div>
    </div>
  );
}

export default Bonus;