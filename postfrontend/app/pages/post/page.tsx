"use client";
import { useDispatch, useSelector } from "react-redux";
import { TextField, TextareaAutosize, Button } from "@mui/material";
import { HomeWrapper } from "./style";
import { useState } from "react";
import { addPost } from "@/app/store/slice";

const PostPage = () => {
  const [postDetails, setPostDetails] = useState({
    title: "",
    post: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    dispatch(addPost(postDetails));
    setPostDetails({
      title: "",
      post: "",
    });
  };

  const changeHandler = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <HomeWrapper>
      <TextField
        style={{ width: "100%" }}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        onChange={changeHandler}
        value={postDetails.title}
        name="title"
      />
      <TextareaAutosize
        style={{ width: "100%", marginTop: "10px", outline: "none" }}
        maxRows={20}
        minRows={5}
        placeholder="Your Post..."
        onChange={changeHandler}
        value={postDetails.post}
        name="post"
      />

      <Button
        variant="outlined"
        style={{ alignSelf: "flex-start", marginTop: "10px" }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </HomeWrapper>
  );
};

export default PostPage;
