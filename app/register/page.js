import Navbar from "../../components/Navbar";
import RegisterForm from "../../components/RegisterForm";
import React from "react";

const page = () => {
  return (
    <main className="flex bg-slate-100 pb-4 h-screen w-full items-start justify-center">
      <Navbar />
      <section className="overflow-y-scroll flex items-center justify-center h-full w-[95%] relative p-4">
        <div className="h-full flex items-center justify-center md:flex-nowrap flex-wrap">
          <video
            src="/images\signup.mp4"
            loop
            autoPlay
            muted
            className="md:w-[40%] w-full md:h-[35rem] object-cover"
          ></video>
          <RegisterForm />
        </div>
      </section>
    </main>
  );
};

export default page;
