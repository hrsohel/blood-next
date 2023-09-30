"use client";
import React from "react";
import LoginForm from "./LoginForm";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../client";

const LoginContainer = () => {
  const client = useApollo();
  return (
    <>
      <section className="overflow-y-scroll px-4 flex items-center justify-center h-full w-[95%] relative lg:flex-nowrap flex-wrap">
        <ApolloProvider client={client}>
          <LoginForm />
        </ApolloProvider>
        <video
          src="/images\login.mp4"
          muted
          loop
          autoPlay
          className="md:ml-4 md:w-[30%] w-full md:h-[30rem] object-cover"
        ></video>
      </section>
    </>
  );
};

export default LoginContainer;
