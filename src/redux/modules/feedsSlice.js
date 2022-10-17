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
      instance.delete(`/feeds/${payload}`)
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const feedsSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {},
  extraReducers: {
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


    [__deleteFeeds.pending]: (state) => {
      state.isLoading = true
    },

    [__deleteFeeds.fulfilled]: (state, action) => {
      state.feeds = state.feeds.filter((feed) =>
        feed.id !== action.payload)

    },

    [__deleteFeeds.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

  },

})

export default feedsSlice.reducer