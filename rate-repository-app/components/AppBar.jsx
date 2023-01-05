import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { Link, useNavigate } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";
import { GET_ME } from "../graphql/queries";
import useSignOut from "../hooks/useSignOut";
import { useState } from "react";
import { useQuery } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: Constants.statusBarHeight,
    backgroundColor: theme.bgColors.tabPrimary,
    height: 80,
  },
  text: {
    color: theme.colors.textTab,
    fontSize: theme.fontSizes.tab,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  const [meUser, setMeUser] = useState(null);
  const signOut = useSignOut();
  const navigate = useNavigate();

  useQuery(GET_ME, {
    onError: (error) => console.log("e", error),
    onCompleted: (data) => {
      if (data && data.me !== null) {
        setMeUser(data.me.id);
      }
    },
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  const handleLogout = async () => {
    await signOut();
    setMeUser(null);
    navigate("/repositories");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable onPress={() => {}}>
          <Link to="/repositories">
            <Text style={styles.text}>Repos</Text>
          </Link>
        </Pressable>

        {!meUser ? (
          <>
            <Pressable onPress={() => {}}>
              <Link to="/signin">
                <Text style={styles.text}>Sign In</Text>
              </Link>
            </Pressable>
            <Pressable onPress={() => {}}>
              <Link to="/signup">
                <Text style={styles.text}>Sign Up</Text>
              </Link>
            </Pressable>
          </>
        ) : (
          <>
            <Pressable onPress={() => {}}>
              <Link to="/addReview">
                <Text style={styles.text}>Add</Text>
              </Link>
            </Pressable>
            <Pressable onPress={handleLogout}>
              <Text style={styles.text}>Sign Out</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
