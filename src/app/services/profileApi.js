import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profile',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8080/movietime/api/',
    headers: {
      "Accept": "application/json"
    }
   }),
   tagTypes: ['Profile'],
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => 'profile',
      providesTags: ['Profile']
    }),
    updateProfile: builder.mutation({
        query: (profileUpdateRequest) => ({
          url: 'profile',
          method: 'PUT',
          body: profileUpdateRequest
        }),
        invalidatesTags: ['Profile']
      }),
  }),
});

export const { useUpdateProfileMutation, useGetMyProfileQuery } =  profileApi;