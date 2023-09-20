export const typeDefs = `#graphql
    type FullName {
        firstName: String
        lastName: String
    }
    type Query {
        fullName: FullName
    }
`;
