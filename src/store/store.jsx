import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../slice/slice"
export const store = configureStore({
    reducer: {
     counter: counterReducer,
  },
})
