import { configureStore, } from '@reduxjs/toolkit'

import counterReducer from './counter/counterSlice';
import { apiSlice, } from './api/apiSlice';


// configureStore
//  - add thunk-middleware
export const store = configureStore({
  // automatically call combine reducers
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});


export type StoreDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
