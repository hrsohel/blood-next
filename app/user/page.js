import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="flex h-screen w-full items-start justify-center">
      <Navbar />
      <section className="overflow-y-scroll flex items-center justify-around md:flex-none flex-wrap h-full w-[95%] relative p-4">
        <div className="w-[20rem] h-[20rem] rounded-full relative">
          <Image
            src="/images\account-avatar-profile-user-11.svg"
            className="w-full h-full rounded-full object-cover"
            width="1000"
            height="1000"
            alt="user"
          />
          <label htmlFor="image">
            <i className="fa fa-camera text-slate-400 absolute bottom-8 right-8 text-2xl"></i>
          </label>
          <input type="file" name="" id="image" className="hidden" />
        </div>
        <div className="px-4 my-4">
          <h1 className="text-4xl font-bold">Profile</h1>
          <hr />
          <h1 className="text-xl font-semibold my-4">Full name</h1>
          <p className="text-slate-500 text-lg">HR Sohel</p>
          <h1 className="text-xl font-semibold my-4">Email</h1>
          <p className="text-slate-500 text-lg">xyz@gmail.com</p>
          <h1 className="text-xl font-semibold my-4">Phone</h1>
          <p className="text-slate-500 text-lg">546556565</p>
          <h1 className="text-xl font-semibold my-4">Last donated</h1>
          <p className="text-slate-500 text-lg">04/02/2022</p>
        </div>
      </section>
    </main>
  );
};

export default page;
