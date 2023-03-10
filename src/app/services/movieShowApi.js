import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieShowApi = createApi({
  reducerPath: 'movieShow',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000/api/',
    mode: 'no-cors',
    headers: {
      "Accept": "application/json"
    }
   }),
  endpoints: (builder) => ({
    getAvailability: builder.query({
      query: ({movieShowId, showDate}) => { 
        return `movieShows/${movieShowId}/availability?date=${showDate}`
    },
    })
  }),
});

export const { useGetAvailabilityQuery } =  movieShowApi;