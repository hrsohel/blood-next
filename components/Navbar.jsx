"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <>
      <header className="flex relative min-h-screen items-center flex-col w-[5%] p-4 bg-[#333]">
        <Link
          title="Home"
          className={`${path === "/" ? "text-red-500" : "text-white"}`}
          href="/"
        >
          <i className="fa fa-home text-2xl lg:text-4xl my-2  font-bold"></i>
        </Link>
        <Link
          className={`${path === "/about" ? "text-red-500" : "text-white"}`}
          title="About us"
          href="/about"
        >
          <i className="fa fa-info-circle text-2xl lg:text-4xl my-2  font-bold"></i>
        </Link>
        <Link
          className={`${path === "/register" ? "text-red-500" : "text-white"}`}
          title="Become a donor"
          href="/register"
        >
          <i className="fa fa-user-plus text-2xl lg:text-4xl my-2 font-bold"></i>
        </Link>
        <Link
          className={`${
            path === "/search-donor" ? "text-red-500" : "text-white"
          }`}
          title="Search donor"
          href="/search-donor"
        >
          <i className="fa fa-search text-2xl lg:text-4xl my-2 font-bold"></i>
        </Link>
        <Link
          className={`${path === "/login" ? "text-red-500" : "text-white"}`}
          title="Login"
          href="/login"
        >
          <i className="fa fa-sign-in text-2xl lg:text-4xl my-2 font-bold"></i>
        </Link>
        <Link
          title="Profile"
          href="/user"
          className={`${
            path === "/user" ? "text-red-500" : "text-white"
          } absolute bottom-4 left-2 md:left-4`}
        >
          <i className="fa fa-user text-2xl lg:text-4xl my-2 font-bold"></i>
        </Link>
      </header>
    </>
  );
};

export default Navbar;
