import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable onPress={() => {}}>
          <Link to="/repositories">
            <Text style={styles.text}>Repos</Text>
          </Link>
        </Pressable>

        <Pressable onPress={() => {}}>
          <Link to="/signin">
            <Text style={styles.text}>Sign In</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
