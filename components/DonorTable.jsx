"use client";
import React from "react";
import { useQuery, gql } from "@apollo/client";
import moment from "moment";

const DonorTable = ({ bloodGroup }) => {
  const [donor, setDonor] = React.useState([]);
  const [loading, setloading] = React.useState([]);
  const { fetchMore } = useQuery(
    gql`
      query GetUserByBlood($bloodGroup: String) {
        getUserByBloodGroup(bloodGroup: $bloodGroup) {
          fullName
          email
          bloodGroup
          lastDonated
          _id
          address
        }
      }
    `,
    { skip: true, variables: { bloodGroup } }
  );
  React.useEffect(() => {
    (async () => {
      const { data, loading } = await fetchMore({ skip: false });
      setDonor(data?.getUserByBloodGroup);
      setloading(loading);
    })();
  }, []);
  return (
    <>
      {loading ? (
        <h1 className="text-lg text-center my-4 font-bold">Loading ...</h1>
      ) : (
        <></>
      )}
      <table className="w-[150vw] mx-4 search-table md:w-full text-center">
        <thead>
          <tr>
            <th>Full name</th>
            <th>Email</th>
            <th>Blood group</th>
            <th>Address</th>
            <th>Last donated</th>
          </tr>
        </thead>
        <tbody>
          {donor?.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.bloodGroup}</td>
                <td>{user.address}</td>
                <td>
                  {moment(user.lastDonated).format("DD MMM, YYYY")} (
                  {moment(Date.now()).diff(moment(user.lastDonated), "days")}{" "}
                  ago)
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DonorTable;
