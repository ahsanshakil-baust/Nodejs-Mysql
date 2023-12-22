import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: {},
};

const auth = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    postObj: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { addPost, postObj } = auth.actions;
export default auth.reducer;
