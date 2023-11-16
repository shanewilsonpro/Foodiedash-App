// Libraries
import { StyleSheet } from "react-native";

// Theme
import {
  BORDER,
  COLORS,
  FONTSIZES,
  SPACES,
} from "../../../theme/theme";

export const styles = StyleSheet.create({
  ShadowContainer: {
    margin: SPACES.margin,
  },
  Shadow: {
    width: "100%",
  },
  OuterContainer: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: BORDER.radius,
  },
  InnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: SPACES.margin,
  },
  LeftSection: {
    flex: 1,
    padding: SPACES.medium,
    paddingRight: SPACES.xxLarge,
  },
  Heading: {
    fontFamily: "medium",
    color: COLORS.black,
    fontSize: FONTSIZES.h4,
  },
  DescriptionText: {
    fontFamily: "regular",
    color: COLORS.gray,
    fontSize: FONTSIZES.h6,
    textAlign: "justify",
  },
  RegisterButton: {
    width: 90,
    height: 30,
    borderRadius: BORDER.radius,
    borderColor: COLORS.black,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    margin: SPACES.margin,
  },
});
