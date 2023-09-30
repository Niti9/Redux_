import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 1,
};

//Create ASYNC THUNk used for async actions
//iss ki help se getUser likhne se hi
//getUserPending, reject,fullfilled chala sakta hai
export const getUserAccount = createAsyncThunk(
  "account/getUser", // ye hai action
  async (userId, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8080/accounts/${userId}`
    );
    return data.amount;
  }
);

//createSlice is an api
//where name: will decide by name for 'Action creator'
export const accountSlice = createSlice({
  name: "account",
  initialState,
  //reducers can be make here as 'object'
  reducers: {
    //immer library create copy and then manipulate data

    //this are "action creators"
    increment: (state, action) => {
      state.amount += 1; //immer library
      //immer library creates copy and then manipulate data
    },
    decrement: (state, action) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
      //yahan value payload means jitni pass ki hogi
      //as a argument utni badegi
    },
    extraReducers: (builder) => {
      builder
      .addCase(getUserAccount.fulfilled, (state, action) => {
        state.amount = action.payload;
        state.pending = false;
    })
      .addCase(getUserAccount.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getUserAccount.rejected, (state, action) => {
        state.error = action.error;
      })
    },
  },
});

//this names can't change
export const { increment, decrement, incrementByAmount } = accountSlice.actions;

// ye api se reducer dega sirf
export default accountSlice.reducer;
