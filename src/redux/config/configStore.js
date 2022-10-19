import { configureStore } from '@reduxjs/toolkit';
import feed from '../modules/feedSlice';
import feeds from '../modules/feedsSlice';
import comments from '../modules/commentsSlice';
//import comment from '../modules/commentSlice';

const store = configureStore({
  reducer: { feed, feeds, comments },
});

export default store;
