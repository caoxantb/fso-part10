import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          description
          forksCount
          language
          id
          ownerAvatarUrl
          reviewCount
          ratingAverage
          fullName
          stargazersCount
        }
      }
    }
  }
`;


export const GET_ME = gql`
  query {
    me {
      id
      username
    }
  }
`;