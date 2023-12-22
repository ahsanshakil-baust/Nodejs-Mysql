import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    post: {},
    modal: {},
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
        showModal: (state, action) => {
            state.modal = action.payload;
        },
    },
});

export const { addPost, postObj, showModal } = auth.actions;
export default auth.reducer;
