import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/request';
//import axios from 'axios';
const initialState = {
  feed: {
    id: 0,
    body: '',
    username: '',
    title: '',
  },
  error: null,
  isLoading: false,
};

export const __getFeed = createAsyncThunk('GET_FEED', async (arg, thunkAPI) => {
  try {
    const { data } = await instance.get(`/feeds/${arg}`);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.code);
  }
});

export const feedSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {},
  extraReducers: {
    // ID로 Feed 찾기
    [__getFeed.pending]: (state) => {
      state.isLoading = true;
    },
    [__getFeed.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.feed = action.payload;
    },
    [__getFeed.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

//export const {} = feedSlice.actions;
export default feedSlice.reducer;
