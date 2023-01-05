import { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_SINGLE_REPO } from "../graphql/queries";

const useSingleRepo = (id, first) => {
  const [repo, setRepo] = useState(null);
  const [reviews, setReviews] = useState([]);

  const { data, loading, fetchMore, ...result } = useQuery(GET_SINGLE_REPO, {
    variables: { repositoryId: id, first },
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      setRepo(data?.repository);
      const reviewsLimited = data.repository.reviews?.edges?.map(
        (edge) => edge.node
      );
      setReviews(reviewsLimited);
    },
    onError: (error) => {
      console.error("Get repo", error);
    },
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data.repository?.reviews?.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        repositoryId: id,
        first,
      },
    });
  };

  return { repo, reviews, loading, fetchMore: handleFetchMore };
};

export default useSingleRepo;
