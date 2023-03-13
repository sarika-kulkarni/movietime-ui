import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    userZip: "07950",
    selectedMovie: "",
    selectedTheater: "",
    selectedMovieShow: "",
    authenticated: false
}

export const selectMovie = createAction('selectMovie');
export const selectMovieShow = createAction('selectMovieShow');
export const setUserZip = createAction('setUserZip');
export const selectTheater = createAction('selectTheater');
export const setAuthenticationStatus = createAction('setAuthenticationStatus');

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
      .addCase(setAuthenticationStatus, (state, action) => {
        state.authenticated = action.payload.authenticated;
      })
  });

export default selectionReducer;