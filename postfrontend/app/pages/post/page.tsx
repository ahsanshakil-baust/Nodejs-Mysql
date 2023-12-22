"use client";
import { useDispatch, useSelector } from "react-redux";
import { TextField, TextareaAutosize, Button } from "@mui/material";
import { HomeWrapper } from "./style";
import { useEffect, useState } from "react";
import { postObj, showModal } from "@/app/store/slice";
import {
    useAddPostMutation,
    useDeletePostMutation,
    useGetPostsQuery,
    useUpdatePostMutation,
} from "@/app/store/api/apiSlice";

const PostPage = () => {
    const post = useSelector((state: any) => state?.post?.post);
    const { data, isLoading, refetch } = useGetPostsQuery("ahsan");

    const [postDetails, setPostDetails] = useState({
        title: "",
        desc: "",
    });

    const dispatch = useDispatch();
    const [newPost, { data: addPostData }] = useAddPostMutation();
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

    const handleDelete = (post: object) => {
        deletePost(post);
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

    return (
        <>
            <HomeWrapper>
                <TextField
                    style={{
                        width: "100%",
                        border:
                            errorObj.inputError &&
                            postDetails.title === "" &&
                            "1px solid red",
                    }}
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    onChange={changeHandler}
                    value={postDetails.title}
                    name="title"
                />
                <TextareaAutosize
                    style={{
                        width: "100%",
                        marginTop: "10px",
                        outline: "none",
                        border:
                            errorObj.inputError &&
                            postDetails.desc === "" &&
                            "1px solid red",
                    }}
                    maxRows={20}
                    minRows={5}
                    placeholder="Your Post..."
                    onChange={changeHandler}
                    value={postDetails.desc}
                    name="desc"
                />

                <Button
                    variant="outlined"
                    style={{ alignSelf: "flex-start", marginTop: "10px" }}
                    onClick={handleSubmit}
                >
                    {post?.title ? "Update" : "Submit"}
                </Button>
            </HomeWrapper>

            <ul className="flex flex-col justify-center items-center mt-10">
                {!isLoading &&
                    data?.data?.map((list: any, index: any) => (
                        <li key={index} className="w-[600px] my-1 rounded-sm">
                            <div className="w-full py-2 px-4 text-sm bg-slate-300 flex justify-between items-center">
                                <span>{list?.title}</span>
                                <div>
                                    <button
                                        onClick={() => handleEdit(list)}
                                        className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                                    >
                                        <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 pointer-events-none">
                                            Edit
                                        </span>
                                    </button>
                                    <button
                                        onClick={() => handleDelete(list)}
                                        className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                                    >
                                        <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Delete
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full py-2 px-4 bg-slate-400">
                                {list?.desc}
                            </div>
                        </li>
                    ))}
                {isLoading && <div>Loading...</div>}
            </ul>
        </>
    );
};

export default PostPage;
