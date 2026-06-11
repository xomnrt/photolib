import { configureStore } from '@reduxjs/toolkit'
import { placeSlice } from './placeSlice'
import { photoSlice } from './photoSlice'

export const store = configureStore({
  reducer: {
    place: placeSlice.reducer,
    photo: photoSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
