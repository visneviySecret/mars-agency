import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'

export interface wordState {
  word: string
}

const initialState: wordState = {
  word: '',
}

export const wordSlice = createSlice({
  name: 'wordSlice',
  initialState,
  reducers: {
    setWord(state, actions) {
      state.word = actions.payload
    },
  },
})

export const { setWord } = wordSlice.actions

export const selectWord = (state: AppState) => state.wordSlice.word

export default wordSlice.reducer
