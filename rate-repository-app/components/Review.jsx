import { View, Text } from "react-native";

const Review = ({ review }) => {
//   console.log(review);
  return (
    <View>
      <Text>{review.rating}</Text>
      <Text>{review.text}</Text>
      <Text>{review.createdAt}</Text>
      <Text>{review.user.username}</Text>
    </View>
  );
};

export default Review;
