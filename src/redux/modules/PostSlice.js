import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/request";

const initialState = {
  feed: {
    id: 0,
    body: "",
    userName: "",
    title: "",
  },

  isLoading: false,
  error: null,
};

export const __postFeed = createAsyncThunk(
  "post/writePost",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post(`/feeds`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateFeed = createAsyncThunk(
  "post/updatePost",
  async (payload, thunkAPI) => {
    try {
      const data2 = await instance.patch(`/feeds/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(data2.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateViewFeed = createAsyncThunk(
  "post/updateViewPost",
  async (payload, thunkAPI) => {
    try {
      const data3 = await instance.get(`/feeds/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(data3.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    // 글 작성하기
    [__postFeed.pending]: (state) => {
      state.isLoading = true;
    },
    [__postFeed.fulfilled]: (state, action) => {
      state.isLoading = false;
      //state.feed = action.payload;
    },
    [__postFeed.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 글 수정하기
    [__updateFeed.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateFeed.fulfilled]: (state, action) => {
      state.isLoading = false;
      //state.feed = {...state.feed, action.payload};
      // 여기 왜 에러나는데 들어가긴 잘들어가지?
    },
    [__updateFeed.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 글 수정하는곳 조회하기
    [__updateViewFeed.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateViewFeed.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.feed = action.payload;
    },
    [__updateViewFeed.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default PostSlice.reducer;
