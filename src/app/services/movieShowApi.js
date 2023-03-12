import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieShowApi = createApi({
  reducerPath: 'movieShow',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8080/movietime/api/',
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        return headers;
    }
   }),
  endpoints: (builder) => ({
    getAvailability: builder.query({
      query: ({movieShowId, showDate}) => { 
        return `movieShows/${movieShowId}/availability?date=${showDate}`
    },
    }),
    bookShow: builder.mutation({
        query: ({movieShowId, bookingRequest}) => ({
          url: `movieShows/${movieShowId}/bookings`,
          method: 'POST',
          body: bookingRequest
        }),
      }),
  }),
});

export const { useGetAvailabilityQuery, useBookShowMutation } =  movieShowApi;