import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    userZip: "07950",
    selectedMovie: "",
    selectedTheater: "",
    selectedMovieShow: ""
}

export const selectMovie = createAction('selectMovie');
export const selectMovieShow = createAction('selectMovieShow');
export const setUserZip = createAction('setUserZip');
export const selectTheater = createAction('selectTheater');

const selectionReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(selectMovie, (state, action) => {
        state.selectedMovie = action.payload.movie;
      })
      .addCase(selectMovieShow, (state, action) => {
        state.selectedMovieShow = action.payload;
      })
      .addCase(selectTheater, (state, action) => {
        state.selectedTheater = action.payload.theaterId;
      })
      .addCase(setUserZip, (state, action) => {
        state.userZip = action.payload.zip;
      })
  });

export default selectionReducer;