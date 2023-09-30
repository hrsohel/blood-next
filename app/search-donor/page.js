import Navbar from "../../components/Navbar";
import React from "react";
import UserTTTableContainer from "@/components/UserTTTableContainer";

const pages = () => {
  return (
    <main className="flex h-screen w-full items-start justify-center">
      <Navbar />
      <UserTTTableContainer />
    </main>
  );
};

export default pages;
