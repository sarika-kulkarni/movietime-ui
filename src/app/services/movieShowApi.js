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
  tagTypes: ['SeatMap','Booking'],
  endpoints: (builder) => ({
    getAvailability: builder.query({
      query: ({movieShowId, showDate}) => { 
        return `movieShows/${movieShowId}/availability?date=${showDate}`
    },
    providesTags: ['SeatMap']
    }),
    bookShow: builder.mutation({
        query: ({movieShowId, bookingRequest}) => ({
          url: `movieShows/${movieShowId}/bookings`,
          method: 'POST',
          body: bookingRequest
        }),
        invalidatesTags: ['SeatMap','Booking']
      }),
  }),
});

export const { useGetAvailabilityQuery, useBookShowMutation } =  movieShowApi;