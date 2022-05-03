import { createSlice, Dispatch, PayloadAction, } from '@reduxjs/toolkit';


export type AsyncThunkBread = {
  id: string,
  name: string,
  image: {
    url: string,
  },
};


interface AsyncThunkState {
  loading: boolean,
  error: Error | undefined,
  data: AsyncThunkBread[] | undefined,
};



const INITIAL_STATE: AsyncThunkState = {
  loading: false,
  error: undefined,
  data: undefined,
}


const usersSlice = createSlice({
  name: 'asyncThunk',
  initialState: INITIAL_STATE,
  reducers: {
    asyncThunkLoading: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    asyncThunkError: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload;
      state.data = undefined;
    },
    asyncThunkSuccess: (state, action: PayloadAction<AsyncThunkBread[]>) => {
      state.loading = false;
      state.error = undefined;
      state.data = action.payload;
    },
  },
});


const { asyncThunkLoading, asyncThunkError, asyncThunkSuccess, } = usersSlice.actions;
export default usersSlice.reducer;


// TODO
//  - fetch wrapper + error handling
//  - success
export const fetchAsyncThunkBreeds = (limit: number = 10) => async (dispatch: Dispatch) => {
  try {
    dispatch(asyncThunkLoading());

    const response = await fetch(`${import.meta.env.VITE_API}/breeds?limit=${limit}`)
    const parsedJson = await response.json(); 
    console.log('response', parsedJson);

  } catch (error) {
    const newError = error instanceof Error ? error : new Error('something happened');
    dispatch(asyncThunkError(newError));
  }
};
