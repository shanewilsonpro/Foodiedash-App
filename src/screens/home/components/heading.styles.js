// Libraries
import { StyleSheet } from "react-native";

// Theme
import { SPACES } from "../../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    paddingVertical: SPACES.medium,
    justifyContent: "space-between",
    marginRight: SPACES.margin,
  },
  HeadingText: {
    marginLeft: SPACES.margin,
    fontSize: 18,
    fontFamily: "bold",
  },
});
