import { View, StyleSheet } from "react-native";
import { parseDate } from "../utils/parseDate";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "blue",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
});

const Review = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text>{review.rating}</Text>
      </View>
      <View style={{ alignItems: "flex-start", flex: 1, marginLeft: 5 }}>
        <Text fontWeight="bold" style={{ marginBottom: 5 }}>
          {review.user.username}
        </Text>
        <Text style={{ marginBottom: 5 }}>{parseDate(review.createdAt)}</Text>
        <Text style={{ marginBottom: 5 }}>{review.text}</Text>
      </View>

      {/* <Text>{review.text}</Text>
      <Text>{review.createdAt}</Text>
      <Text>{review.user.username}</Text> */}
    </View>
  );
};

export default Review;
