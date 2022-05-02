import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react";


interface Bread {
  id: string,
  name: string,
  image: {
    url: string,
  },
};


export const apiSlice =  createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    prepareHeaders: (headers) => {
      headers.set('x-api-key', import.meta.env.VITE_API_KEY);
      return headers;
    }, 
  }),
  endpoints: (builder) => ({
    fetchBreads: builder.query<Bread[], number | void>({
      query: (limit = 10) => `/breeds?limit=${limit}`,
    }),
  }),
});


export const { useFetchBreadsQuery, } = apiSlice;
