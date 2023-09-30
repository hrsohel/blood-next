"use client";
import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const history = useRouter();
  const USER_MUTATION = gql`
    mutation AddUser($content: UserSchema) {
      addUser(content: $content) {
        ... on User {
          __typename
          email
          fullName
        }
        ... on ErrorMessage {
          __typename
          message
        }
      }
    }
  `;
  const [submit, { data, loading, error }] = useMutation(USER_MUTATION);
  const getValues = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const content = Object.fromEntries(formData.entries());
      const { data } = await submit({ variables: { content: content } });
      if (data?.addUser?.__typename === "User") history.push("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={getValues} className="w-full md:w-[40%]">
        <h1 className="text-2xl font-bold my-4 text-center">Become a donor</h1>
        <div className="">
          <div className="">
            <label
              htmlFor="fullname"
              className="my-1 block mx-0 md:mx-4 text-lg font-semibold"
            >
              Full name
            </label>
            <input
              id="fullname"
              type="text"
              className="p-1 text-sm md:text-lg my-2 rounded-md w-full mx-0 md:mx-4 border-[1px] border-black focus:border-red-500 outline-none"
              required={true}
              placeholder="Full name"
              name="fullName"
            />
            <label
              htmlFor="email"
              className="my-1 block mx-0 md:mx-4 text-lg font-semibold"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="p-1 text-sm md:text-lg my-2 rounded-md w-full mx-0 md:mx-4 border-[1px] border-black focus:border-red-500 outline-none"
              required={true}
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="">
            <label
              htmlFor="dateofbirth"
              className="my-1 block mx-0 md:mx-4 text-lg font-semibold"
            >
              Date of birth
            </label>
            <input
              type="date"
              id="dateofbirth"
              className="p-1 text-sm md:text-lg my-2 rounded-md w-full mx-0 md:mx-4 border-[1px] border-black focus:border-red-500 outline-none"
              required={true}
              placeholder=""
              name="dateOfBirth"
            />
            <label
              htmlFor="address"
              className="my-1 block mx-0 md:mx-4 text-lg font-semibold"
            >
              Address
            </label>
            <textarea
              id="address"
              className="p-1 text-sm md:text-lg my-2 rounded-md w-full mx-0 md:mx-4 border-[1px] border-black focus:border-red-500 outline-none"
              required={true}
              placeholder="Address"
              name="address"
            ></textarea>
            <label
              htmlFor="bloodgroup"
              className="my-1 block mx-0 md:mx-4 text-lg font-semibold"
            >
              Blood group
            </label>
            <select
              id="bloodgroup"
              name="bloodGroup"
              className="p-1 text-sm md:text-lg my-2 rounded-md w-full mx-0 md:mx-4 border-[1px] border-black focus:border-red-500 outline-none"
            >
              <option value="">Select blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="">
            <label
              htmlFor="lastdonated"
              className="my-1 block mx-0 md:mx-4 text-lg font-semibold"
            >
              Last donated
            </label>
            <input
              type="date"
              id="lastdonated"
              name="lastDonated"
              className="p-1 text-sm md:text-lg my-2 rounded-md w-full mx-0 md:mx-4 border-[1px] border-black focus:border-red-500 outline-none"
              required={true}
              placeholder="Last donated"
            />
            <label
              htmlFor="password"
              className="my-1 block mx-0 md:mx-4 text-lg font-semibold"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="p-1 text-sm md:text-lg my-2 rounded-md w-full mx-0 md:mx-4 border-[1px] border-black focus:border-red-500 outline-none"
              required={true}
              placeholder="Set password"
              name="password"
            />
          </div>
        </div>

        {data?.addUser?.__typename === "ErrorMessage" ? (
          <div className="bg-red-300 mx-0 md:mx-4 my-2 text-lg text-red-700 py-2 text-center">
            {data?.addUser.message}
          </div>
        ) : (
          <></>
        )}
        <input
          className="bg-red-500 cursor-pointer text-white px-4 py-2 text-sm md:text-xl rounded-md md:ml-4"
          type="submit"
          value={`${loading ? "Submitting" : "Become a donor"}`}
          disabled={loading}
        />
      </form>
    </>
  );
};

export default RegisterForm;
