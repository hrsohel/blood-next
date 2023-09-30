import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { useMemo } from "react";

const createClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: "/api" }),
    cache: new InMemoryCache(),
  });
};

export function useApollo() {
  const client = useMemo(() => createClient(), []);
  return client;
}
