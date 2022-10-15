import { configureStore } from '@reduxjs/toolkit';
import feed from '../modules/feedSlice';
import comments from '../modules/commentsSlice';
import comment from '../modules/commentSlice';

const store = configureStore({
  reducer: { feed, comment, comments },
});

export default store;
