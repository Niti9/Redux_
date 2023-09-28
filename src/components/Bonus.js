
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



import {incrementBonus } from '../actions';
function Bonus({store}) {
 
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        {/* yahan globally getState work karega */}
        <h3>Total point : {store.getState().bonus.points}</h3>
        
        {/* yahan  incrementBonus ACTION ko dispatch ki help 
        se reducer tak apne aap pahunchayega */}
        <button onClick={()=>store.dispatch(incrementBonus())}>Increment + </button>
      </div>
    </div>
  );
}

export default Bonus;