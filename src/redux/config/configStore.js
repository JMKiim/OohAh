import { configureStore } from "@reduxjs/toolkit";
import feeds from "../modules/feedsSlice";

const store = configureStore({
  reducer: { feeds: feeds },
});

export default store;