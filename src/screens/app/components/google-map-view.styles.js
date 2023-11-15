// Libraries
import { StyleSheet } from "react-native";

// Theme
import { BORDER, COLORS, SCREEN } from "../../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    width: SCREEN.width,
    height: SCREEN.height / 2.6,
    borderColor: COLORS.gray2,
    borderWidth: 1,
  },
  Map: {
    width: "100%",
    height: "100%",
    borderRadius: BORDER.radius,
  },
});
