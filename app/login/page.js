import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="flex h-screen w-full items-start justify-center">
      <Navbar />
      <section className="overflow-y-scroll px-4 flex items-center justify-center h-full w-[95%] relative">
        <form
          style={{ boxShadow: "2px 2px .5rem black" }}
          action=""
          className="md:w-[60%] w-full rounded-md p-4"
        >
          <input
            type="email"
            className="p-1 text-lg my-2 rounded-md w-full border-[1px] border-black focus:border-red-500 outline-none"
            placeholder="Email"
            required={true}
          />
          <input
            type="password"
            className="p-1 text-lg my-2 rounded-md w-full border-[1px] border-black focus:border-red-500 outline-none"
            placeholder="Password"
            required={true}
          />
          <input
            className="bg-red-500 cursor-pointer text-white px-4 py-2 text-xl rounded-md"
            type="submit"
            value="Login"
          />
        </form>
      </section>
    </main>
  );
};

export default page;
