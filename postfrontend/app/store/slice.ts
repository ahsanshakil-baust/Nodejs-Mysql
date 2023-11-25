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
