"use client";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import DonorTable from "./DonorTable";
import { useApollo } from "@/client";
import { useSearchParams } from "next/navigation";

const UserTTTableContainer = () => {
  const client = useApollo();
  const router = useSearchParams();
  const bloodGroup = router.get("bloodGroup");
  return (
    <>
      <section className="overflow-y-scroll h-full w-[95%] relative">
        <h1 className="text-center text-xl my-4 font-semibold">Donor list</h1>
        {/* <div className="my-4">
          <input
            type="search"
            className="p-1 text-lg my-2 rounded-md w-[10rem] mx-4 border-[1px] border-black focus:border-red-500 outline-none"
            placeholder="Search blood"
            required={true}
          />
          <input
            type="submit"
            className="bg-red-500 hover:bg-red-300 cursor-pointer px-4 rounded-md py-1 text-white text-lg"
            value="Search"
          />
        </div> */}
        <div className="my-4 overflow-x-scroll">
          <ApolloProvider client={client}>
            <DonorTable bloodGroup={bloodGroup} />
          </ApolloProvider>
        </div>
      </section>
    </>
  );
};

export default UserTTTableContainer;
