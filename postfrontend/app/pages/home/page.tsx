"use client";
import {
    useDeletePostMutation,
    useGetPostsQuery,
} from "@/app/store/api/apiSlice";
import { postObj, showModal } from "@/app/store/slice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const HomePage = () => {
    const { data, isLoading, refetch } = useGetPostsQuery("ahsan");
    const [deletePost] = useDeletePostMutation();
    const dispatch = useDispatch();
    const router = useRouter();

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
    const handleEdit = (list: any) => {
        dispatch(postObj(list));
        router.push("/pages/post");
    };

    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
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
                                    <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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
    );
};

export default HomePage;
