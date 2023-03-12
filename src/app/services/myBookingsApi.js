import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myBookingsApi = createApi({
  reducerPath: 'myBookings',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8080/movietime/api/',
    headers: {
      "Accept": "application/json"
    }
   }),
  tagTypes: ['Booking'],
  endpoints: (builder) => ({
    getMyBookings: builder.query({
      query: () => 'bookings',
      providesTags: ['Booking']
    }),
    cancelBooking: builder.mutation({
        query: ({bookingId}) => ({
          url: `bookings/${bookingId}`,
          method: 'DELETE'
        }),
        invalidatesTags: ['Booking']
      }),
  }),
});

export const { useGetMyBookingsQuery, useCancelBookingMutation } =  myBookingsApi;