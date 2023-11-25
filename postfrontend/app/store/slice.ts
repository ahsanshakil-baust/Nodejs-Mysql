import { createSlice } from "@reduxjs/toolkit";

const obj = {};

const auth = createSlice({
    name: "post",
    initialState: obj,
    reducers: {
        addPost: (state, action) => {
            state = action.payload;
        },
    },
});

export const { addPost } = auth.actions;
export default auth.reducer;
