import Navbar from "../../components/Navbar";
import React from "react";
import LoginContainer from "@/components/LoginContainer";

const page = () => {
  return (
    <main className="flex bg-slate-100 h-screen w-full items-start justify-center">
      <Navbar />
      <LoginContainer />
    </main>
  );
};

export default page;
