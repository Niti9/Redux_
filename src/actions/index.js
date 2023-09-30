import axios from 'axios';


// action name constants (used to resolve the conflict kyunki increment , decrement wagarh bhot baar repeat ho rha hai 
// if condition  mein aur action creator aur dispatch mein bhi)
// const init = 'account/init';
export const inc = 'account/increment';
export const dec = 'account/decrement';
export const incByAmo = '/account/incrementByAmount';
export const incBonus = 'bonus/increment';
export const getAccUserPending = 'account/getUser/Pending'
export const getAccUserFulFilled = 'account/getUser/fulfilled'
export const getAccUserRejected = 'account/getUser/rejected'




//Action Creator it should be synchronous
// now make this initUser change into getUser
//also give dynamic id to the api

export function getUserAccount(id) { // new action for thunk (here dispatch, and getState(to get global state) used )
    return async (dispatch, getState) => {
        try {
            dispatch(getAccountUserPending());
            const { data } = await axios.get(`http://localhost:8080/accounts/${id}`) //ye db.json ka accounts ka data le rhe hai
            dispatch(getAccountUserFulFilled(data.amount))

        }
        catch (error) {
            dispatch(getAccountUserRejected(error.message));
        }
    }
}


export function getAccountUserFulFilled(value) {

    return { type: getAccUserFulFilled, payload: value }
}
export function getAccountUserRejected(error) {

    return { type: getAccUserRejected, error: error }
}
export function getAccountUserPending() {
    return { type: getAccUserPending }
}




// export function initUser(value) {

//     return { type: init, payload: value }
// }

export function increment() {
    return { type: inc }
}
export function decrement() {
    return { type: dec }
}
export function incrementByAmount(value) {
    return { type: incByAmo, payload: value } //it is like plain object
}
export function incrementBonus(value) {
    return { type: incBonus } //it is like plain object
}

