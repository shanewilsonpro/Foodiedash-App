// Libraries
import { StyleSheet } from "react-native";

// Theme
import { BORDER, COLORS, FONTSIZES, SPACES } from "../../../theme/theme";

export const styles = StyleSheet.create({
  ShadowContainer: {
    marginHorizontal: SPACES.margin,
    marginVertical: SPACES.margin / 2,
  },
  Shadow: {
    width: "100%",
    borderRadius: BORDER.radius,
  },
  OuterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    borderRadius: BORDER.radius,
    height: 50,
  },
  InnerContainer: {
    flexDirection: "row",
    marginHorizontal: SPACES.xLarge,
    alignItems: "center",
  },
  Title: {
    paddingLeft: SPACES.padding,
    fontFamily: "regular",
    fontSize: FONTSIZES.h5,
    color: COLORS.gray,
  },
});
