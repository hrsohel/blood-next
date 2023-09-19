import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex h-screen w-full items-start justify-center">
      <Navbar />
      <section className="overflow-y-scroll h-full w-[95%] relative ">
        <div className="h-full">
          <Image
            src="/images\blood-bank.png"
            className="w-full h-full object-cover"
            width="1000"
            height="0"
            alt="Home image"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1
            style={{ textShadow: "2px 2px 1rem #fff" }}
            className="text-4xl text-center text-red-500 font-bold"
          >
            Spare a Moment, Save a Life: Donate Blood Today!
          </h1>
        </div>
        <div className="flex my-2 px-4 items-center justify-center md:flex-nowrap flex-wrap">
          <div>
            <h1 className="text-2xl">BLOOD GROUPS</h1>
            <p className="text-lg">
              blood group of any human being will mainly fall in any one of the
              following groups.
            </p>
            <ul className="list-disc ml-8">
              <li>A positive or A negative</li>
              <li>B positive or B negative</li>
              <li>O positive or O negative</li>
              <li>AB positive or AB negative</li>
            </ul>
            <p className="text-lg">
              A healthy diet helps ensure a successful blood donation, and also
              makes you feel better! Check out the following recommended foods
              to eat prior to your donation.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images\bloodDonor.jpg"
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
