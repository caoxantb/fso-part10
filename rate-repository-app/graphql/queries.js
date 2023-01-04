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

export const GET_SINGLE_REPO = gql`
  query querySingleRepo($repositoryId: ID!) {
    repository(id: $repositoryId) {
      description
      fullName
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
      forksCount
      url
      language
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
