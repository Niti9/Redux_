import {
  getAccUserFulFilled,
  getAccUserRejected,
  getAccUserPending,
  inc,
  dec,
  incByAmo,
} from "../actions";


//Starting of Reducer
//initialize state here
export function accountReducer(state = { amount: 1 }, action) {
  // state means previous state and action means the action we doing like add, remove etc.

  // here state of amount is immutable (means the original state not change but copy of original create and change)
  switch (action.type) {
    case getAccUserFulFilled:
      return { amount: action.payload };
    case getAccUserRejected:
      return { ...state, error: action.error, pending: false }; //spread operator for no change
    case getAccUserPending:
      return { ...state, pending: true };

    case inc:
      return { amount: state.amount + 1 };

    case dec:
      return { amount: state.amount - 1 };

    case incByAmo:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}
