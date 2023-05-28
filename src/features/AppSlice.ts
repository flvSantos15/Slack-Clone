import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/store'

export interface AppState {
  chatId: null | string
}

const initialState: AppState = {
  chatId: null
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterChat: (state, action) => {
      state.chatId = action.payload.chatId
    }
  }
})

export const { enterChat } = appSlice.actions

export const selecteChatId = (state: RootState) => state.app.chatId

export default appSlice.reducer
