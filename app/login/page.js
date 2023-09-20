import Navbar from "../../components/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="flex bg-slate-100 h-screen w-full items-start justify-center">
      <Navbar />
      <section className="overflow-y-scroll px-4 flex items-center justify-center h-full w-[95%] relative lg:flex-nowrap flex-wrap">
        <form
          style={{ boxShadow: "2px 2px .5rem black" }}
          action=""
          className="w-full md:w-[50%] p-4 rounded-md"
        >
          <input
            type="email"
            className="p-1 text-sm md:text-lg my-2 rounded-md w-full border-[1px] border-black focus:border-red-500 outline-none"
            placeholder="Email"
            required={true}
          />
          <input
            type="password"
            className="p-1 text-sm md:text-lg my-2 rounded-md w-full border-[1px] border-black focus:border-red-500 outline-none"
            placeholder="Password"
            required={true}
          />
          <input
            className="bg-red-500 cursor-pointer text-white px-4 py-2 text-sm md:text-xl rounded-md"
            type="submit"
            value="Login"
          />
        </form>
        <video
          src="/images\login.mp4"
          muted
          loop
          autoPlay
          className="md:ml-4 md:w-[30%] w-full md:h-[30rem] object-cover"
        ></video>
      </section>
    </main>
  );
};

export default page;
