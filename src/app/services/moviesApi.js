import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000/api/',
    mode: 'no-cors',
    headers: {
      "Accept": "application/json"
    }
   }),
  endpoints: (builder) => ({
    getRunningMovies: builder.query({
      query: () => 'movies?running=true',
    }),
  }),
});

export const { useGetRunningMoviesQuery } =  moviesApi;