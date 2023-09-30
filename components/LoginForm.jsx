"use client";
import React from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { GET_USER_BY_EMAIL, LOGIN_MUTATION } from "@/queryStrings";
import { useApollo } from "@/client";

const LoginForm = () => {
  const history = useRouter();
  const client = useApollo();
  const [submit, { loading, data }] = useMutation(LOGIN_MUTATION);
  const getValues = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());
    const { data } = await submit({ variables: { email, password } });
    if (data?.loginUser?.__typename === "User") {
      client.writeQuery({
        query: GET_USER_BY_EMAIL,
        data: {
          getQuery: data?.loginUser,
        },
      });
      // history.push("/");
    }
  };
  return (
    <>
      <form
        onSubmit={getValues}
        style={{ boxShadow: "2px 2px .5rem black" }}
        action=""
        className="w-full md:w-[50%] p-4 rounded-md"
      >
        <input
          type="email"
          className="p-1 text-sm md:text-lg my-2 rounded-md w-full border-[1px] border-black focus:border-red-500 outline-none"
          placeholder="Email"
          required={true}
          name="email"
        />
        <input
          type="password"
          className="p-1 text-sm md:text-lg my-2 rounded-md w-full border-[1px] border-black focus:border-red-500 outline-none"
          placeholder="Password"
          required={true}
          name="password"
        />
        {data?.loginUser?.__typename === "ErrorMessage" ? (
          <div className="bg-red-300 text-red-600 my-2 text-lg text-center">
            {data?.loginUser?.message}
          </div>
        ) : (
          <></>
        )}
        <input
          className="bg-red-500 cursor-pointer text-white px-4 py-2 text-sm md:text-xl rounded-md"
          type="submit"
          value={loading ? "Loading..." : "Login"}
          disabled={loading}
        />
      </form>
    </>
  );
};

export default LoginForm;
