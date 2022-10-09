import { Pressable, StyleSheet, Text } from "react-native";
import { AppColors } from "../../constants/colors";

function Button({ children, onPress }) {
  return (
    <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: AppColors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 4,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: AppColors.primary50,
  },
});
