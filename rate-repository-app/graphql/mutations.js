import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        id
      }
      accessToken
      expiresAt
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation createReview($review: CreateReviewInput) {
    createReview(review: $review) {
      id
      userId
      createdAt
      text
      repositoryId
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($user: CreateUserInput) {
    createUser(user: $user) {
      username
    }
  }
`;
