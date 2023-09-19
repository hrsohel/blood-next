import Navbar from "@/components/Navbar";
import React from "react";

const pages = () => {
  return (
    <main className="flex h-screen w-full items-start justify-center">
      <Navbar />
      <section className="overflow-y-scroll h-full w-[95%] relative">
        <div className="my-4">
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
        </div>
        <div className="my-4 overflow-x-scroll">
          <table className="w-[150vw] mx-4 search-table md:w-full text-center">
            <thead>
              <tr>
                <th>Full name</th>
                <th>Address</th>
                <th>Available</th>
                <th>Last donated</th>
              </tr>
              <tr>
                <td>HR Sohel</td>
                <td>Chittagong</td>
                <td>Yes</td>
                <td>04/02/2022</td>
              </tr>
              <tr>
                <td>HR Sohel</td>
                <td>Chittagong</td>
                <td>Yes</td>
                <td>04/02/2022</td>
              </tr>
              <tr>
                <td>HR Sohel</td>
                <td>Chittagong</td>
                <td>Yes</td>
                <td>04/02/2022</td>
              </tr>
            </thead>
          </table>
        </div>
      </section>
    </main>
  );
};

export default pages;
