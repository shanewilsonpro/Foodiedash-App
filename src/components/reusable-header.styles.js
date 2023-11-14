// Libraries
import { StyleSheet } from "react-native";

// Theme
import { COLORS, FONTSIZES, SPACES } from "../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    marginBottom: SPACES.medium,
    marginHorizontal: SPACES.xLarge,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderText: {
    fontFamily: "medium",
    fontSize: FONTSIZES.h3,
    color: COLORS.offwhite,
  },
  Image: {
    width: 40,
    height: 40,
    borderRadius: 99,
    resizeMode: "cover",
  },
});
