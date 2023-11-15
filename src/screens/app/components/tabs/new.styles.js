// Libraries
import { StyleSheet } from "react-native";

// Theme
import { FONTSIZES, SPACES } from "../../../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  CountText: {
    fontFamily: "regular",
    fontSize: FONTSIZES.h4,
    textAlign: "center",
    marginHorizontal: SPACES.medium,
  },
});