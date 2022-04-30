import { createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react";


const API_URL = 'https://api.thedogapi.com/v1';
const API_KEY = '29f3ba6a-5806-4d26-8913-4f242b3485e4'


interface Bread {
  id: string,
  name: string,
  image: {
    url: string,
  },
};


export const apiSlice =  createApi({
  reducerPath: 'apiDogs',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set('x-api-key', API_KEY);
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
