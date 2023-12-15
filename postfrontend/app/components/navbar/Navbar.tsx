"use client";
import React from "react";
import { NavbarWrapper } from "./style";
import { navwrapper } from "./tailwind";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavbarWrapper className={navwrapper}>
      <Link className="underline mr-5" href="/">
        Home
      </Link>

      <Link className="underline mr-5" href="/pages/signup">
        SignUp
      </Link>

      <Link className="underline mr-5" href="/pages/login">
        Login
      </Link>

      <Link className="underline mr-5" href="/pages/post">
        Add Post
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
