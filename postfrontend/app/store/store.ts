import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slice";
import { apiSlice } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
