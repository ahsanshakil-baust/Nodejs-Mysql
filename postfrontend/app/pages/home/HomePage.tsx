"use client";

import styled from "@emotion/styled";
import { TextField, TextareaAutosize, Button } from "@mui/material";

const HomeWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: "200px",
    width: "500px",
});

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
            >
                Outlined
            </Button>
        </HomeWrapper>
    );
};

export default HomePage;
