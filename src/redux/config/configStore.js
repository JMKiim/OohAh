import { configureStore } from "@reduxjs/toolkit";
import addFeed from "../modules/addFormSlice";

const store = configureStore({
  reducer: { addFeed, addFeed },
});

export default store;
