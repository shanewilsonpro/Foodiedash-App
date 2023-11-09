// Libraries
import { StyleSheet } from "react-native";

// Theme
import { BORDER, COLORS, FONTSIZES, SPACES } from "../../../theme/theme";

export const styles = StyleSheet.create({
  OuterContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
    marginHorizontal: SPACES.margin,
  },
  InterContainer: {
    flexDirection: "row",
    flex: 1,
  },
  ProfileImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: BORDER.radius * 3,
    alignSelf: "center",
  },
  Header: {
    marginLeft: SPACES.margin,
    justifyContent: "center",
  },
  HeadingText: {
    fontFamily: "medium",
    fontSize: FONTSIZES.h4,
    color: COLORS.secondary,
  },
  AddressText: {
    fontFamily: "regular",
    fontSize: FONTSIZES.h5,
    color: COLORS.gray,
  },
  TimeEmoji: {
    fontSize: FONTSIZES.h1,
    textAlign: "center",
  },
});
