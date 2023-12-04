"use client";

import { TextField, TextareaAutosize, Button } from "@mui/material";
import { HomeWrapper } from "./style";

const handleSubmit = (e: any) => {};

const HomePage = () => {
    return (
        <HomeWrapper>
            <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="Title"
                variant="outlined"
            />
            <TextareaAutosize
                style={{ width: "100%", marginTop: "10px", outline: "none" }}
                maxRows={20}
                minRows={5}
                placeholder="Your Post..."
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

export default HomePage;
