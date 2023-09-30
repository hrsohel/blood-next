import {
  addUser,
  loginUser,
  getUser,
  getUserByBloodGroup,
} from "../resolvers/userController";

export const resolvers = {
  Query: {
    getUser,
    getUserByBloodGroup,
  },
  Mutation: {
    addUser,
    loginUser,
  },
};
