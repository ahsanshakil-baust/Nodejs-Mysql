import React, { useEffect, useState } from "react";
import {
    useAddPostMutation,
    useDeletePostMutation,
    useGetPostsQuery,
    useUpdatePostMutation,
} from "@/app/store/api/apiSlice";
import { postObj, showModal } from "@/app/store/slice";
import { useDispatch, useSelector } from "react-redux";

const usePostHook = () => {
    const post = useSelector((state: any) => state?.post?.post);

    const { data, isLoading, refetch } = useGetPostsQuery("ahsan");

    const [postDetails, setPostDetails] = useState({
        title: "",
        desc: "",
    });

    const dispatch = useDispatch();
    const [newPost] = useAddPostMutation();
    const [updatePost] = useUpdatePostMutation();
    const [deletePost] = useDeletePostMutation();
    const [errorObj, setErrorObj] = useState({
        inputError: "",
        commonError: "",
    });

    const handleSubmit = async (e: any) => {
        if (postDetails.title === "" && postDetails.desc === "") {
            setErrorObj((prevState) => ({
                ...prevState,
                inputError: "Field Required",
            }));
        } else if (
            !post.title &&
            postDetails.title !== "" &&
            postDetails.desc !== ""
        ) {
            const response = await newPost(postDetails);
            const result = response?.data;
            dispatch(
                showModal({
                    showModal: true,
                    modalType: "success",
                    msg: result?.msg,
                })
            );
        } else if (
            post.title &&
            postDetails.title !== "" &&
            postDetails.desc !== ""
        ) {
            const response = await updatePost({
                id: post.id,
                title: postDetails.title,
                desc: postDetails.desc,
            });
            const result = response?.data;
            dispatch(
                showModal({
                    showModal: true,
                    modalType: "success",
                    msg: result?.msg,
                })
            );
        }

        setPostDetails({
            title: "",
            desc: "",
        });

        dispatch(
            postObj({
                title: "",
                desc: "",
            })
        );
    };

    const changeHandler = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setPostDetails((prevState) => ({ ...prevState, [name]: value }));
        setErrorObj({
            inputError: "",
            commonError: "",
        });
    };

    const handleDelete = async (post: object) => {
        const response = await deletePost(post);
        const result = response?.data;
        dispatch(
            showModal({
                showModal: true,
                modalType: "success",
                msg: result?.msg,
            })
        );
    };

    useEffect(() => {
        refetch();
    }, [refetch]);

    const handleEdit = (list: any) => {
        dispatch(postObj(list));
    };

    useEffect(() => {
        post?.title &&
            setPostDetails({
                title: post.title,
                desc: post.desc,
            });
    }, [post]);

    return {
        data,
        postDetails,
        isLoading,
        errorObj,
        post,
        handleSubmit,
        changeHandler,
        handleDelete,
        handleEdit,
    };
};

export default usePostHook;
