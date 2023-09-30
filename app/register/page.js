import Navbar from "../../components/Navbar";
import React from "react";
import RegisterComponent from "@/components/RegisterComponent";

const page = () => {
  return (
    <main className="flex bg-slate-100 pb-4 h-screen w-full items-start justify-center">
      <Navbar />
      <section className="overflow-y-scroll h-full w-[95%] relative p-4">
        <div className="h-full flex items-center justify-around md:flex-nowrap flex-wrap">
          <video
            src="/images\signup.mp4"
            loop
            autoPlay
            muted
            className="md:w-[30%] w-full md:h-[35rem] object-cover"
          ></video>
          <RegisterComponent />
        </div>
      </section>
    </main>
  );
};

export default page;
