// Libraries
import { StyleSheet } from "react-native";

// Theme
import { BORDER, COLORS, FONTSIZES, SCREEN, SPACES } from "../../../../theme/theme";

export const styles = StyleSheet.create({
  AddressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: SPACES.margin,
  },
  AddressText: {
    fontSize: FONTSIZES.h4,
    fontFamily: "medium",
    color: COLORS.black,
    width: SCREEN.width / 1.6
  },
  DirectionsButton: {
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: BORDER.radius,
    padding: SPACES.small
  },
  DirectionsButtonText: {
    fontSize: FONTSIZES.h4,
    fontFamily: "medium",
    color: COLORS.black,
  }
});
