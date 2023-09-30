"use client";
import React from "react";
import RegisterForm from "./RegisterForm";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../client";

const RegisterComponent = () => {
  const client = useApollo();
  return (
    <>
      <ApolloProvider client={client}>
        <RegisterForm />
      </ApolloProvider>
    </>
  );
};

export default RegisterComponent;
