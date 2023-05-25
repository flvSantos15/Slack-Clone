import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '@/features/counter/CounterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export const store_0001 = store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
