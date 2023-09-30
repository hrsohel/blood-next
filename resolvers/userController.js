import User from "../schemas/mongoDB/User";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const addUser = async (_, { content }) => {
  try {
    const yearDifference =
      new Date(Date.now()).getFullYear() -
      new Date(content.dateOfBirth).getFullYear();
    if (yearDifference < 18) {
      return {
        __typename: "ErrorMessage",
        message: "Age must greater than 18!",
      };
    }
    const user = await User.findOne({ email: content.email });
    if (user) {
      return {
        __typename: "ErrorMessage",
        message: "This email already exists!",
      };
    }
    await User.create({
      ...content,
      password: await bcrypt.hash(content.password, 10),
    });
    return {
      __typename: "User",
      fullName: content.fullName,
      email: content.email,
    };
  } catch (error) {
    console.error(error.message);
  }
};

const loginUser = async (_, { email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    return {
      __typename: "ErrorMessage",
      message: "Invalid Email!",
    };
  }
  const verifyPassword = await bcrypt.compare(password, user?.password);
  if (!verifyPassword) {
    return {
      __typename: "ErrorMessage",
      message: "Invalid password!",
    };
  }
  cookies().set("user", user._id);
  return {
    __typename: "User",
    fullName: user.fullName,
    email: user.email,
    password: user.password,
    lastDonated: user.lastDonated,
    dateOfBirth: user.dateOfBirth,
    bloodGroup: user.bloodGroup,
    address: user.address,
    _id: user._id,
  };
};

const getUser = async (_, { email }) => {
  return await User.findOne({ email });
};

const getUserByBloodGroup = async (_, { bloodGroup }) => {
  let user;
  if (bloodGroup) {
    user = await User.find({
      bloodGroup: bloodGroup,
    });
  } else {
    user = await User.find({});
  }
  return user;
};

module.exports = { addUser, loginUser, getUser, getUserByBloodGroup };
