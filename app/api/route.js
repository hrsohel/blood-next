import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "../../schemas/index";
import { resolvers } from "../../resolvers/index";
import mongoose from "mongoose";
import { GraphQLScalarType, Kind } from "graphql";

const DateType = new GraphQLScalarType({
  name: "Date",
  description: "Custom scalar type for handling dates",
  serialize(value) {
    // Convert the date to a string for output
    return value.toISOString();
  },
  parseValue(value) {
    // Parse the date from a string input
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      // Parse the date from an AST literal
      return new Date(ast.value);
    }
    return null; // Invalid input
  },
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error(err.message));

const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(server);

export async function GET(req) {
  return handler(req);
}

export async function POST(req) {
  return handler(req);
}
