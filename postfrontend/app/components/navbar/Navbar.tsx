"use client";
import React from "react";
import { NavbarWrapper } from "./style";
import { navwrapper } from "./tailwind";
import Link from "next/link";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Navbar = () => {
  return (
    <NavbarWrapper className={navwrapper}>
      <Link href="/pages/home">Home</Link>
      <Link href="/pages/signup">SignUp</Link>

      <Button variant="contained" endIcon={<SendIcon />}>
        <Link className="no-underline " href="/pages/login">
          Login
        </Link>
      </Button>
    </NavbarWrapper>
  );
};

export default Navbar;
