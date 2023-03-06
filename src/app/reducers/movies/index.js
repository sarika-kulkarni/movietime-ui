import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  runningMovies: []
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      setRunningMovies: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.runningMovies = []
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setRunningMovies } = moviesSlice.actions
  
  export default moviesSlice.reducer