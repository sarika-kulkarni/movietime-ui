import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registrationApi = createApi({
  reducerPath: 'registrationApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000/api/',
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        return headers;
    }
   }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (registrationRequest) => ({
        url: 'registration',
        method: 'POST',
        body: registrationRequest
      }),
    }),
  }),
});

export const { useRegisterUserMutation } =  registrationApi;