// Libraries
import { StyleSheet } from "react-native";

// Theme
import { COLORS, SPACES } from "../../theme/theme";

export const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
  },
  Header: (top) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: SPACES.xLarge,
    marginTop: top + SPACES.margin,
    marginBottom: SPACES.margin,
  }),
  LeftHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  UsernameEmailContainer: {
    paddingLeft: SPACES.padding,
  },
  UsernameLabel: {
    fontFamily: "medium",
    color: COLORS.black,
  },
  EmailLabel: {
    fontFamily: "regular",
    color: COLORS.gray,
  },
  Image: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
