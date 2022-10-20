import { configureStore } from '@reduxjs/toolkit';
import feed from '../modules/feedSlice';
import feeds from '../modules/feedsSlice';
import comments from '../modules/commentsSlice';
import post from '../modules/PostSlice';

const store = configureStore({
  reducer: { post, feed, feeds, comments },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
