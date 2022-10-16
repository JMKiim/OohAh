import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//import axios from 'axios';
import instance from '../../shared/request';

const initialState = {
  // comments: {
  //   data: [],
  //   isLoading: false,
  //   error: null,
  // },
  commentsByFeedId: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const __getCommentsByFeedId = createAsyncThunk(
  'GET_COMMENTS_BY_FEED_ID',
  async (arg, thunkAPI) => {
    try {
      const { data } = await instance.get(`/comments?feedId=${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __updateComment = createAsyncThunk(
  'UPDATE_COMMENT',
  async (arg, thunkAPI) => {
    try {
      await instance.patch(`/comments/${arg.id}`, arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  'DELETE_COMMENT',
  async (arg, thunkAPI) => {
    try {
      await instance.delete(`/comments/${arg}`);
      return thunkAPI.fulfillWithValue(arg);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    // FeedId로 댓글 조회
    [__getCommentsByFeedId.pending]: (state) => {
      state.commentsByFeedId.isLoading = true;
    },
    [__getCommentsByFeedId.fulfilled]: (state, action) => {
      state.commentsByFeedId.isLoading = false;
      state.commentsByFeedId.data = action.payload;
    },
    [__getCommentsByFeedId.rejected]: (state, action) => {
      state.commentsByFeedId.isLoading = false;
      state.commentsByFeedId.error = action.payload;
    },
    // 댓글 수정하기
    [__updateComment.pending]: (state) => {
      state.commentsByFeedId.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.commentsByFeedId.isLoading = false;
      const targetIndex = state.commentsByFeedId.data.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.commentsByFeedId.data.splice(targetIndex, 1, action.payload);
    },
    [__updateComment.rejected]: (state, action) => {
      state.commentsByFeedId.isLoading = false;
      state.commentsByFeedId.error = action.payload;
    },
    // 댓글 삭제하기
    [__deleteComment.pending]: (state) => {
      state.commentsByFeedId.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.commentsByFeedId.isLoading = false;
      const targetIndex = state.commentsByFeedId.data.findIndex(
        (comment) => comment.id === action.payload
      );
      state.commentsByFeedId.data.splice(targetIndex, 1);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.commentsByFeedId.isLoading = false;
      state.commentsByFeedId.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
