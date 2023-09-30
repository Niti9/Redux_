import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 1,
};

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
});

//this names can't change
export const { increment } = bonusSlice.actions;

// ye api se reducer dega sirf
export default bonusSlice.reducer;
