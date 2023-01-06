import { View, Pressable, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#0366d6",
    height: 40,
    margin: 5,
  },
});

const Button = ({ onSubmit, text }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onSubmit}>
        <Text style={{ color: "whitesmoke" }}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
