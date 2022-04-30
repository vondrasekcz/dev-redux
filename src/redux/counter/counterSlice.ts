import { createSlice, PayloadAction, } from "@reduxjs/toolkit";


interface CounterState {
  value: number,
};


const INITIAL_STATE: CounterState = {
  value: 0,
};


const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  // you can MUTATE state in reducers! because of immer
  //  - reducers use immer package. it handle immutability of state. watch changes in state and then it just create new state with all the changes.
  //  - https://github.com/immerjs/immer
  reducers: {
    incremented: (state) => {
      state.value++;
    },
    decremented: (state) => {
      state.value--;
    },
    amountAdded: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});


export const {
  incremented,
  decremented,
  amountAdded,
} = counterSlice.actions;
export default counterSlice.reducer;
