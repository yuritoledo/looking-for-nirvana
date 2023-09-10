import { configureStore } from "@reduxjs/toolkit"
import movingSlicer from "./movingSlicer"

export const store = configureStore({
  reducer: {
    moving: movingSlicer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
