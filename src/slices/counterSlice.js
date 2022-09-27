import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state, action) => {
      state.counter = state.counter + 1;
    },
  },
});

export const { addCounter } = counterSlice.actions;

export default productCartSlice.reducer;
