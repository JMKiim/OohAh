import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/request';

const initialState = {
  data: {
    id: 0,
    feedId: 0,
    username: '',
    content: '',
  },
  isLoading: false,
  error: null,
};

export const __getComment = createAsyncThunk(
  'GET__COMMENT',
  async (arg, thunkAPI) => {
    try {
      const { data } = await instance.get(`/comments/${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: {
    // 댓글 조회
    [__getComment.pending]: () => {},
    [__getComment.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__getComment.rejected]: () => {},
  },
});

export default commentSlice.reducer;
