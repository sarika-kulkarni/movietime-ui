import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const theatersApi = createApi({
  reducerPath: 'theatersApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000/api/',
    mode: 'no-cors',
    headers: {
      "Accept": "application/json"
    }
   }),
  endpoints: (builder) => ({
    getTheaters: builder.query({
      query: () => 'theaters?zip=07079',
    }),
  }),
});

export const { useGetTheatersQuery } =  theatersApi;