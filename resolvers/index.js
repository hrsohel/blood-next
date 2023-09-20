const fullNames = {
  firstName: "HR",
  lastName: "Sohel",
};
export const resolvers = {
  Query: {
    fullName: () => fullNames,
  },
};
