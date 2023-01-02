import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

    const { data, loading, ...result } = useQuery(GET_REPOSITORIES, {
      fetchPolicy: "cache-and-network",
      onCompleted: (data) => {
        setRepositories(data.repositories);
      },
    });

  return { repositories, loading };
};

export default useRepositories;
