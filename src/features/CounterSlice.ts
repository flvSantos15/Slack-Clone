import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/store'

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  value: 0,
  status: 'idle'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: (state) => {
      state.value += 1
    },
    decremented: (state) => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

export const selecteCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
