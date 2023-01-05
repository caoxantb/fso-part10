import { useApolloClient, useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../graphql/mutations";

const useAddReview = () => {
  const [addReview] = useMutation(ADD_REVIEW, {
    onError: (error) => {
      console.error("add review", error);
    },
  });

  return addReview;
};

export default useAddReview;
