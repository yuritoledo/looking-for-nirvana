import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface MovingSlicer {
  step: number
  place: string
  phone: string
}

const initialState: MovingSlicer = {
  step: 1,
  place: "",
  phone: "",
}

const movingSlicer = createSlice({
  name: "moving",
  initialState,
  reducers: {
    setPlace: (state, action: PayloadAction<string>) => {
      state.place = action.payload
      state.step++
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
      state.step++
    },
  },
})

export const { setPlace, setPhone } = movingSlicer.actions
export default movingSlicer.reducer
