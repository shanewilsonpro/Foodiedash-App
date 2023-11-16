// Libraries
import { StyleSheet } from "react-native";

// Theme
import {
  BORDER,
  COLORS,
  SHADOWS,
  SPACES,
  FONTSIZES,
} from "../../../theme/theme";

export const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER.radius,
    shadowColor: SHADOWS.medium,
    padding: 6,
    margin: 6,
  },
  Container: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
  },
  Image: {
    height: "90%",
    width: 100,
    borderRadius: BORDER.radius,
    alignSelf: "center",
  },
  PriceContainer: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  PriceText: {
    fontFamily: "medium",
    fontSize: FONTSIZES.h4,
    color: COLORS.gray,
  },
  FoodTitle: {
    fontFamily: "semibold",
    fontSize: FONTSIZES.h3,
    color: COLORS.black,
  },
  FoodTagsList: {
    marginTop: SPACES.margin,
  },
  FoodTag: {
    margin: SPACES.small,
    padding: SPACES.small,
    backgroundColor: COLORS.primary,
    borderRadius: 99,
  },
  FoodTagText: {
    fontSize: FONTSIZES.h6,
    fontFamily: "regular",
    paddingHorizontal: SPACES.small,
    color: COLORS.lightWhite,
  },
});
