import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

  type PhotoState = {
    value: number | null
  }

  const initialState: PhotoState = {
    value: null
  }

  export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
      choosePhoto: (state, action: PayloadAction<number>) => {
        state.value = action.payload
      },
      clearPhoto: (state) => {
        state.value = null
      },
    },
  })

export const { choosePhoto, clearPhoto } = photoSlice.actions;

export default photoSlice.reducer;
