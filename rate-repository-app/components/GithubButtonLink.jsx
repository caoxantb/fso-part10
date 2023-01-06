import * as Linking from "expo-linking";
import { View, Pressable, Text } from "react-native";
import Button from "./Button";

const GithubButtonLink = ({ url }) => {
  return Linking.canOpenURL(url) ? (
    <Button onSubmit={() => Linking.openURL(url)} text="Go to URL"/>
  ) : (
    <></>
  );
};

export default GithubButtonLink;
