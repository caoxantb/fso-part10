import * as Linking from "expo-linking";
import { View, Pressable, Text } from "react-native";

const GithubButtonLink = ({ url }) => {
  return Linking.canOpenURL(url) ? (
    <View>
      <Pressable onPress={() => Linking.openURL(url)}>
        <Text>Go to URL</Text>
      </Pressable>
    </View>
  ) : (
    <></>
  );
};

export default GithubButtonLink;
