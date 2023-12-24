"use client";
import { TextField, TextareaAutosize, Button } from "@mui/material";
import { HomeWrapper } from "./style";
import usePostHook from "./usePostHook";
import PostLists from "@/app/components/posts/PostLists";

const PostPage = () => {
    const { errorObj, postDetails, changeHandler, handleSubmit, post } =
        usePostHook();

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

            <PostLists />
        </>
    );
};

export default PostPage;
