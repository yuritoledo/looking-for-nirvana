import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface MovingSlicer {
  step: number
  place: string
  phone: string
}

const initialState: MovingSlicer = {
  step: 0,
  place: "",
  phone: "",
}

const movingSlicer = createSlice({
  name: "moving",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    setPlace: (state, action: PayloadAction<string>) => {
      state.place = action.payload
    },
  },
})

export const { setPlace, setStep } = movingSlicer.actions
export default movingSlicer.reducer
