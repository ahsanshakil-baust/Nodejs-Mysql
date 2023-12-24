"use client";

import {
    useDeletePostMutation,
    useGetPostsQuery,
} from "@/app/store/api/apiSlice";
import { postObj, showModal } from "@/app/store/slice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useHomeHook = () => {
    const { data, isLoading, refetch } = useGetPostsQuery("ahsan");
    const [deletePost] = useDeletePostMutation();
    const dispatch = useDispatch();
    const router = useRouter();

    // const handleDelete = async (post: object) => {
    //     const response = await deletePost(post);
    //     const result = response?.data;
    //     dispatch(
    //         showModal({
    //             showModal: true,
    //             modalType: "success",
    //             msg: result?.msg,
    //         })
    //     );
    // };

    type ApiResponse = { data: { msg: string } } | { error: any };

    const handleDelete = async (post: object) => {
        try {
            const response: ApiResponse = await deletePost(post);

            if ("data" in response) {
                const result = response.data;
                dispatch(
                    showModal({
                        showModal: true,
                        modalType: "success",
                        msg: result.msg,
                    })
                );
            } else {
                const error = response.error;
                dispatch(
                    showModal({
                        showModal: true,
                        modalType: "error",
                        msg: "Error occurred while deleting the post.",
                    })
                );
            }
        } catch (error) {
            dispatch(
                showModal({
                    showModal: true,
                    modalType: "error",
                    msg: "An error occurred while processing the request.",
                })
            );
        }
    };

    const handleEdit = (list: any) => {
        dispatch(postObj(list));
        router.push("/pages/post");
    };

    useEffect(() => {
        refetch();
    }, [refetch]);
    return {
        data,
        isLoading,
        handleDelete,
        handleEdit,
    };
};

export default useHomeHook;
