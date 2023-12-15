import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const auth = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { addPost } = auth.actions;
export default auth.reducer;
