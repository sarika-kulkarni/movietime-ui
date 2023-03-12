import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8080/movietime/api/',
    mode: 'no-cors',
    headers: {
      "Accept": "application/json"
    }
   }),
  endpoints: (builder) => ({
    getRunningMovies: builder.query({
      query: () => 'movies?running=true'
    }),
    getTheatersRunningMovie: builder.query({
      query: (movieId) => `movies/${movieId}/movieShows`,
    }),
  }),
});

export const { useGetTheatersRunningMovieQuery, useGetRunningMoviesQuery } =  moviesApi;