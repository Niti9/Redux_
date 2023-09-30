// First code but then it will change

// import { useState } from "react";

// function Account() {
//   const [account, setAccount] = useState({ amount: 0 });
//   const [value, setValue] = useState(0);

//   const increment = () => {
//     setAccount({ amount: account.amount + 1 });
//   };

//   const decrement = () => {
//     setAccount({ amount: account.amount - 1 });
//   };

//   const incrementByAmount = (value) => {
//     setAccount({ amount: account.amount + value });
//   };

//   return (
//     <div className="card">
//       <div className="container">
//         <h4>
//           <h> Account Component </h>
//         </h4>
//         <h3>Amount:${account.amount}</h3>
//         <button onClick={increment}>Increment +</button>
//         <button onClick={decrement}>Decrement - </button>
//         <input type="text" onChange={(e) => setValue(+e.target.value)} />
//         <button onClick={() => incrementByAmount(value)}>
//           Increment By {value}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Account;







// second code here we remove all useState hook
// and function create in App.js and get or passed props here
 // and also importing here getUserAccount 
// import { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import {increment, decrement, incrementByAmount, getUserAccount} from '../actions';

// function Account() {
//   const [value, setValue] = useState(0);

//   //useSelector used for the state
//   //useDispatch used for 
//   const amount = useSelector(state => state.account.amount)
//   const point = useSelector(state => state.bonus.points)
//   const dispatch = useDispatch();

//   return (
//     <div className="card">
//       <div className="container">
//         <h4>
//           Account Component
//         </h4>
//         <h3>Amount:${amount}</h3>
//         {/* Now dispatch hokar hi har chiz change hongi */}
//         <button onClick={() => dispatch(increment())}>Increment +</button>
//         <button onClick={() => dispatch(decrement())}>Decrement - </button>
//         <input type="text" onChange={(e) => setValue(+e.target.value)} />
//         <button onClick={() => dispatch(incrementByAmount(value))}>
//           Increment By {value}
//         </button>

//         {/* isse hum db.json se account se 1 id ki value access karenge
//         aur dispatch karenge App.js mein */}
//         <button onClick={() => dispatch(getUserAccount(1))}>
//           User Account 
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Account;

















/** Now we will use Redux toolkit 
 * so here we'll get data from slices/accountSlices or bonusSlices
*/
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, incrementByAmount, getUserAccount} from '../slices/accountSlice';

function Account() {
  const [value, setValue] = useState(0);

  //useSelector used for the state
  //useDispatch used for 
  const amount = useSelector(state => state.account.amount)
  const point = useSelector(state => state.bonus.points)
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          Account Component
        </h4>
        <h3>Amount:${amount}</h3>
        {/* Now dispatch hokar hi har chiz change hongi */}
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement - </button>
        <input type="text" onChange={(e) => setValue(+e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value}
        </button>
        <button onClick={() => dispatch(getUserAccount(2))}>
          Get User 
        </button>

        {/* isse hum db.json se account se 1 id ki value access karenge
        aur dispatch karenge App.js mein */}
        {/* <button onClick={() => dispatch(getUserAccount(1))}>
          User Account 
        </button> */}
      </div>
    </div>
  );
}

export default Account;
