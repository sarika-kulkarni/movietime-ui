import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8080/movietime/',
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/x-www-form-urlencoded");
        return headers;
    }
   }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginRequest) => ({
        url: 'perform_login',
        method: 'POST',
        body: loginRequest
      }),
    }),
    logout: builder.query({
        query: () => 'logout'
      }),
  }),
});

export const { useLoginMutation, useLogoutQuery } =  loginApi;