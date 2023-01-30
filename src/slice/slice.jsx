import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 0,
  string: 's',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    string: (state) => {
      state.string = "state"
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, string } = counterSlice.actions

export default counterSlice.reducer
