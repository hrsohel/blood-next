export const typeDefs = `#graphql
scalar Date
    type User {
        _id: ID
        fullName: String
        email: String
        dateOfBirth: Date
        address: String
        bloodGroup: String
        lastDonated: Date
        password: String
    }
    input UserSchema {
        fullName: String
        email: String
        dateOfBirth: Date
        address: String
        bloodGroup: String
        lastDonated: Date
        password: String
    }
    type ErrorMessage {
        message: String
    }
    union AddUserSchemaWithErrorMessage = User | ErrorMessage
    union LoginUserSchemaWithErrorMessage = User | ErrorMessage
    type Query {
        getUser(email:String): User
        getUserByBloodGroup(bloodGroup: String): [User]
    }
    type Mutation {
        addUser(content: UserSchema): AddUserSchemaWithErrorMessage
        loginUser(email: String, password: String): LoginUserSchemaWithErrorMessage
    }
`;
