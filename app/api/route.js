import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "../../schemas/index";
import { resolvers } from "../../resolvers/index";

const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(server);

export async function GET(req) {
  return handler(req);
}

export async function POST(req) {
  return handler(req);
}
