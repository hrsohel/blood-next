import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="flex h-screen w-full items-start justify-center">
      <Navbar />
      <section className="overflow-y-scroll flex items-center justify-center h-full w-[95%] relative p-4">
        <form className="w-full">
          <h1 className="text-2xl font-bold my-4 text-center">
            Become a donor
          </h1>
          <div className="">
            <div className="flex items-center justify-between md:flex-nowrap flex-wrap">
              <input
                id="fullname"
                type="text"
                className="p-1 text-lg my-2 rounded-md w-full mx-4 border-[1px] border-black focus:border-red-500 outline-none"
                required={true}
                placeholder="Full name"
              />
              <input
                type="number"
                className="p-1 text-lg my-2 rounded-md w-full mx-4 border-[1px] border-black focus:border-red-500 outline-none"
                required={true}
                placeholder="Phone"
              />
              <input
                type="email"
                className="p-1 text-lg my-2 rounded-md w-full mx-4 border-[1px] border-black focus:border-red-500 outline-none"
                required={true}
                placeholder="Email"
              />
            </div>
            <div className="flex items-center justify-between md:flex-nowrap flex-wrap">
              <input
                type="date"
                className="p-1 text-lg my-2 rounded-md w-full mx-4 border-[1px] border-black focus:border-red-500 outline-none"
                required={true}
                placeholder=""
              />
              <textarea
                className="p-1 text-lg my-2 rounded-md w-full mx-4 border-[1px] border-black focus:border-red-500 outline-none"
                required={true}
                placeholder="Address"
              ></textarea>
              <select className="p-1 text-lg my-2 rounded-md w-full mx-4 border-[1px] border-black focus:border-red-500 outline-none">
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="flex items-center justify-between md:flex-nowrap flex-wrap">
              <input
                type="date"
                className="p-1 text-lg my-2 rounded-md w-full mx-4 border-[1px] border-black focus:border-red-500 outline-none"
                required={true}
                placeholder="Last donated"
              />
              <input
                type="password"
                className="p-1 text-lg my-2 rounded-md w-full mx-4 border-[1px] border-black focus:border-red-500 outline-none"
                required={true}
                placeholder="Set password"
              />
            </div>
          </div>
          <input
            className="bg-red-500 cursor-pointer text-white px-4 py-2 text-xl rounded-md ml-4"
            type="submit"
            value="Become a donor"
          />
        </form>
      </section>
    </main>
  );
};

export default page;
