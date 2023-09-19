import Navbar from "@/components/Navbar";
import React from "react";

const pages = () => {
  return (
    <main className="flex h-screen w-full items-start justify-center">
      <Navbar />
      <section className="overflow-y-scroll flex items-center justify-center h-full w-[95%] p-4">
        <div>
          <h1 className="text-4xl font-bold my-4">
            <span className="text-red-500">A</span>bout{" "}
            <span className="text-red-500">U</span>s
          </h1>
          <p className="text-lg">
            This is a non-profitable,service motive Circle of Youths purely
            devoted for the welfare of society.Encouraging and inspiring people
            to donate blood and providing fresh blood to the needy people
            without any cost is the real goal of this organization.We feel one
            day no one in this country will die in scarcity of blood. People in
            need of blood contact us (in case they fail to manage from their
            family,friend,relatives or blood bank). In such condition,we manage
            blood donors from our online database,which itself is the countrys
            largest donor online database . we have more than 40 hundred donors
            registered. Since our registration in May 2020, we successfully have
            saved more than 30 hundred lives and have also brought smiles at the
            faces of more than 35 hundred families throughout the City.
          </p>
        </div>
      </section>
    </main>
  );
};

export default pages;
