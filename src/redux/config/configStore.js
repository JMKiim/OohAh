import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/PostSlice";

const store = configureStore({
  reducer: { post },
});

export default store;
