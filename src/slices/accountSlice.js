import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    amount: 1,
}

//createSlice is an api 
//where name: will decide by name for 'Action creator'
export const accountSlice = createSlice({
    name: 'account',
    initialState,
    //reducers can be make here as 'object'
    reducers: {

        //immer library create copy and then manipulate data

        //this are "action creators"
        increment: (state, action) => {
            state.amount += 1   //immer library
            //immer library creates copy and then manipulate data
        },
        decrement: (state, action) => {
            state.amount -= 1
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
            //yahan value payload means jitni pass ki hogi 
            //as a argument utni badegi
        },

    },
})

//this names can't change 
export const { increment, decrement, incrementByAmount } = accountSlice.actions

// ye api se reducer dega sirf
export default accountSlice.reducer