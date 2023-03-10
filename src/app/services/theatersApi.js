import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const theatersApi = createApi({
  reducerPath: 'theaters',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000/api/',
    mode: 'no-cors',
    headers: {
      "Accept": "application/json"
    }
   }),
  endpoints: (builder) => ({
    getTheaters: builder.query({
      query: (zip) => `theaters?zip=${zip}`,
    }),
  }),
});

export const { useGetTheatersQuery } =  theatersApi;