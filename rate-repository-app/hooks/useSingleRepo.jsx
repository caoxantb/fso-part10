import { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_SINGLE_REPO } from "../graphql/queries";

const useSingleRepo = (id) => {
  const [repo, setRepo] = useState(null);

  const { data, loading, ...result } = useQuery(GET_SINGLE_REPO, {
    variables: {repositoryId: id},
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      setRepo(data?.repository);
    },
    onError: (error) => {
      console.error("Get repo", error);
    },
  });

  return { repo, loading };
};

export default useSingleRepo;
