import { useApolloClient, useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [authenticate, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.error("login mutation error:", error);
    },
  });

  const signIn = async ({ username, password }) => {
    const { data } = await authenticate({
      variables: { credentials: { username, password } },
    });

    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();

    return { data };
  };

  return [signIn, result];
};

export default useSignIn;
