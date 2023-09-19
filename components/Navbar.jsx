import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="flex relative min-h-screen items-center flex-col w-[5%] p-4 bg-[#333]">
        <Link title="Home" href="/">
          <i className="fa fa-home text-2xl lg:text-4xl my-2 text-white font-bold"></i>
        </Link>
        <Link title="About us" href="/about">
          <i className="fa fa-info-circle text-2xl lg:text-4xl my-2 text-white font-bold"></i>
        </Link>
        <Link title="Become a donor" href="register">
          <i className="fa fa-user-plus text-2xl lg:text-4xl my-2 text-white font-bold"></i>
        </Link>
        <Link title="Search donor" href="/search-donor">
          <i className="fa fa-search text-2xl lg:text-4xl my-2 text-white font-bold"></i>
        </Link>
        <Link title="Login" href="/login">
          <i className="fa fa-sign-in text-2xl lg:text-4xl my-2 text-white font-bold"></i>
        </Link>
        <Link
          title="Profile"
          href="/user"
          className="absolute bottom-4 left-2 md:left-4"
        >
          <i className="fa fa-user text-2xl lg:text-4xl my-2 text-white font-bold"></i>
        </Link>
      </header>
    </>
  );
};

export default Navbar;
