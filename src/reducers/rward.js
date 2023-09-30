import { createAction, createReducer } from '@reduxjs/toolkit'


 //create increment action for reducer
export const increment = createAction('reward/increment');
export const incrementByAmount = createAction('reward/incrementByAmount');

const initialState = { 
    points: 15,
 }

 //yahan payload apne aap kaam kar sakta hai 
const  rwardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points+= action.payload;
    })
   
})

export default rwardReducer;