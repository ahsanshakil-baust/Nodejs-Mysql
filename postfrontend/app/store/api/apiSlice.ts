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

        updatePost: builder.mutation({
            query: (post) => ({
                url: "/update-post",
                method: "PATCH",
                body: post,
            }),
            invalidatesTags: ["Posts"],
        }),

        deletePost: builder.mutation({
            query: (post) => ({
                url: "/delete-post",
                method: "DELETE",
                body: post,
            }),
            invalidatesTags: ["Posts"],
        }),
    }),
});

export const {
    useAddPostMutation,
    useGetPostsQuery,
    useUpdatePostMutation,
    useDeletePostMutation,
} = apiSlice;
