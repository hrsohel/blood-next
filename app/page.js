import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex h-screen w-full items-start justify-center">
      {/* <div className="md:w-[50rem] ">
        <Image
          src="/images\blood-image1.png"
          className="w-full h-full object-cover"
          width="1000"
          height="0"
          alt="Home image"
        />
      </div>
      <div className="px-4 md:w-[50rem]">
        <h1 className="md:text-xl text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          distinctio, esse maxime ea totam ducimus veniam unde commodi facere
          architecto, vero perspiciatis ratione molestias aliquid sint ex,
          expedita aperiam laboriosam!
        </h1>
      </div> */}
      <Navbar />
      <section className="overflow-y-scroll h-full w-[95%] relative ">
        <div className="h-full">
          <Image
            src="/images/blood-image1.png"
            className="w-full h-full object-cover"
            width="1000"
            height="1000"
            alt="Home image"
          />
        </div>
        <div className="flex my-2 px-4 items-center justify-center md:flex-nowrap flex-wrap">
          <div className="md:w-[50%]">
            <h1 className="text-2xl">BLOOD GROUPS</h1>
            <p className="md:text-lg text-sm ">
              blood group of any human being will mainly fall in any one of the
              following groups.
            </p>
            <ul className="list-disc ml-8">
              <li>A positive or A negative</li>
              <li>B positive or B negative</li>
              <li>O positive or O negative</li>
              <li>AB positive or AB negative</li>
            </ul>
            <p className="md:text-lg text-sm">
              A healthy diet helps ensure a successful blood donation, and also
              makes you feel better! Check out the following recommended foods
              to eat prior to your donation.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images\blood-image2.png"
              className="w-full object-cover h-full"
              width="1000"
              height="1000"
              alt="Hero"
            />
          </div>
        </div>
        <div className="flex items-center justify-around my-4 flex-wrap">
          <Link
            className="text-xl w-[10rem] my-2 rounded-md text-center text-red-500 border-[1px] border-red-500 px-4 py-2 hover:bg-red-500 hover:text-white"
            href="#"
          >
            A+
          </Link>
          <Link
            className="text-xl w-[10rem] my-2 rounded-md text-center text-red-500 border-[1px] border-red-500 px-4 py-2 hover:bg-red-500 hover:text-white"
            href="#"
          >
            A-
          </Link>
          <Link
            className="text-xl w-[10rem] my-2 rounded-md text-center text-red-500 border-[1px] border-red-500 px-4 py-2 hover:bg-red-500 hover:text-white"
            href="#"
          >
            AB+
          </Link>
          <Link
            className="text-xl w-[10rem] my-2 rounded-md text-center text-red-500 border-[1px] border-red-500 px-4 py-2 hover:bg-red-500 hover:text-white"
            href="#"
          >
            AB-
          </Link>
          <Link
            className="text-xl w-[10rem] my-2 rounded-md text-center text-red-500 border-[1px] border-red-500 px-4 py-2 hover:bg-red-500 hover:text-white"
            href="#"
          >
            B+
          </Link>
          <Link
            className="text-xl w-[10rem] my-2 rounded-md text-center text-red-500 border-[1px] border-red-500 px-4 py-2 hover:bg-red-500 hover:text-white"
            href="#"
          >
            B-
          </Link>
          <Link
            className="text-xl w-[10rem] my-2 rounded-md text-center text-red-500 border-[1px] border-red-500 px-4 py-2 hover:bg-red-500 hover:text-white"
            href="#"
          >
            O+
          </Link>
          <Link
            className="text-xl w-[10rem] my-2 rounded-md text-center text-red-500 border-[1px] border-red-500 px-4 py-2 hover:bg-red-500 hover:text-white"
            href="#"
          >
            O-
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;
