import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3030",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    addPost: builder.mutation({
      query: (post) => ({
        url: "/add-post",
        method: "POST",
        body: post,
      }),

      invalidatesTags: ["Posts"],
    }),

    getPosts: builder.query({
      query: (name) => "/",
      providesTags: ["Posts"],
    }),
  }),
});

export const { useAddPostMutation, useGetPostsQuery } = apiSlice;
