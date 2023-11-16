// Libraries
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

// Theme
import { COLORS, FONTSIZES } from "../theme/theme";

export const Button = ({ title, onPress, isValid, loader }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.ButtonStyle(!isValid ? COLORS.gray : COLORS.primary)}
    >
      {!loader ? (
        <Text style={styles.ButtonText}>{title}</Text>
      ) : (
        <ActivityIndicator />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonText: {
    fontFamily: "bold",
    color: COLORS.white,
    fontSize: FONTSIZES.h3,
    textAlign: "center"
  },
  ButtonStyle: (backgroundColor) => ({
    height: 50,
    width: "100%",
    marginVertical: 20,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  }),
});
