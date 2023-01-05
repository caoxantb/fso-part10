import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query queryRepos(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $after: String
    $first: Int
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      after: $after
      first: $first
    ) {
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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
  query querySingleRepo($repositoryId: ID!, $after: String, $first: Int) {
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
      reviews(after: $after, first: $first) {
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;
