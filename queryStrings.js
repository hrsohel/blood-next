import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation LoginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      ... on ErrorMessage {
        __typename
        message
      }
      ... on User {
        __typename
        fullName
        email
        address
        lastDonated
        dateOfBirth
        bloodGroup
        _id
      }
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query GetUser {
    getUser {
      _id
      fullName
      email
      address
      bloodGroup
      lastDonated
      dateOfBirth
    }
  }
`;
