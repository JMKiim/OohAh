import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/request';

const initialState = {
  comments: {
    data: [],
    isLoading: false,
    error: null,
  },
  commentsByFeedId: {
    data: [],
    isLoading: false,
    error: null,
  },
};

export const __getCommentsAll = createAsyncThunk(
  'GET_COMMENTS_ALL',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(`/comments`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

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

export const __addComment = createAsyncThunk(
  'ADD_COMMENT',
  async (arg, thunkAPI) => {
    try {
      const { data } = await instance.post('/comments', arg);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
      return thunkAPI.rejectWithValue(error);
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
  reducers: {
    clearCommentsByFeedId: (state) => {
      state.commentsByFeedId = null;
    },
  },
  extraReducers: {
    // 모든 댓글 조회
    [__getCommentsAll.pending]: (state) => {
      state.comments.isLoading = true;
    },
    [__getCommentsAll.fulfilled]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.data = action.payload;
    },
    [__getCommentsAll.rejected]: (state, action) => {
      state.comments.isLoading = false;
      state.comments.error = action.payload;
    },
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
    // 댓글 추가하기
    [__addComment.pending]: (state) => {
      state.commentsByFeedId.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.commentsByFeedId.isLoading = false;
      state.commentsByFeedId.data.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
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

export const { clearCommentsByFeedId } = commentsSlice.actions;
export default commentsSlice.reducer;
