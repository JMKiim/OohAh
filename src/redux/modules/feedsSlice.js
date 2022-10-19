import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from '../../shared/request'

const initialState = {
  feeds: [],
  isLoading: false,
  error: null,
}

export const __getFeeds = createAsyncThunk(
  "GET_FEEDS",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const { data } = await instance.get("/feeds")
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const __deleteFeeds = createAsyncThunk(
  "DELETE_FEED",
  async (payload, thunkAPI) => {
    try {
      await instance.delete(`/feeds/${payload}`)
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const feedsSlice = createSlice({ // 리듀서를 만들어주는 역할
  name: "feeds", // 모듈이름
  initialState, // 초기상태값
  reducers: {}, // 자동으로 만들어지는 리듀서
  extraReducers: { // 직접 커스텀으로 만드는 리듀서

    // 전제 조회
    [__getFeeds.pending]: (state) => {
      state.isLoading = true
    },
    [__getFeeds.fulfilled]: (state, action) => {
      state.isLoading = false
      state.feeds = action.payload
    },
    [__getFeeds.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    // 삭제
    [__deleteFeeds.pending]: (state) => {
      state.isLoading = true
    },

    [__deleteFeeds.fulfilled]: (state, action) => {
      state.feeds = state.feeds.filter((feed) => feed.id !== action.payload)

    },

    [__deleteFeeds.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

  },

})

export default feedsSlice.reducer