"use client";
import React from "react";
import { NavbarWrapper } from "./style";
import { navwrapper } from "./tailwind";
import Link from "next/link";

const Navbar = () => {
    return (
        <NavbarWrapper className={navwrapper}>
            <Link className="underline mr-5" href="/pages/home">
                Home
            </Link>

            <Link className="underline mr-5" href="/pages/signup">
                SignUp
            </Link>

            <Link className="underline mr-5" href="/pages/login">
                Login
            </Link>
        </NavbarWrapper>
    );
};

export default Navbar;
