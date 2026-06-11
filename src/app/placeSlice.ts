import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

  type PlaceState = {
    value: string | null
  }

  const initialState: PlaceState = {
    value: sessionStorage.getItem('selectedPlace')
  }

  export const placeSlice = createSlice({
    name: 'place',
    initialState,
    reducers: {
      choosePlace: (state, action: PayloadAction<string>) => {
        state.value = action.payload
      },
      clearPlace: (state) => {
        state.value = null
      },
    },
  })

export const { choosePlace, clearPlace } = placeSlice.actions;

export default placeSlice.reducer;
