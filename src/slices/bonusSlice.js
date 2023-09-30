import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 1,
};

//createAction help to change another action 
const incrementByAmount = createAction('account/incrementByAmount')


//createSlice is an api
//where name: will decide by name for 'Action creator'
export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  //reducers can be make here as 'object'
  reducers: {
    //immer library create copy and then manipulate data

    //this are "action creators"
    increment: (state, action) => {
      state.points += 1;
    },
  },

  //ExtraReducers help to creat reducer which can use
  //to change one reducer or action from another reducer
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {

      //condition
      //agar hum amount mein 100 se jyaad increment karenge
      //incrementByAmount se tab reward ke points mein bhi 1 increase hoga
      if (action.payload >= 100) {
        state.points += 1
      }
    }) 
  }
});

//this names can't change
export const { increment } = bonusSlice.actions;

// ye api se reducer dega sirf
export default bonusSlice.reducer;
