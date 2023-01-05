import { useApolloClient, useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "./useSignIn";

const useSignUp = () => {
  const [createUser, result] = useMutation(CREATE_USER, {
    onError: (error) => {
      console.error("sign up mutation error:", error);
    },
  });

  const signUp = async ({ username, password }) => {
    const {data} = await createUser({
      variables: { user: { username, password } },
    });

    console.log(username, password)

    return { data };
  };

  return [signUp, result];
};

export default useSignUp;
