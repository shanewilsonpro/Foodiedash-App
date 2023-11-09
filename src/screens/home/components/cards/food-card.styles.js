// Libraries
import { StyleSheet } from "react-native";

// Theme
import { COLORS, SCREEN, BORDER, FONTSIZES, SPACES } from "../../../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: BORDER.radius,
  },
  Image: {
    width: SCREEN.width / 1.6,
    height: SCREEN.height / 5.2,
    borderTopRightRadius: BORDER.radius,
    borderTopLeftRadius: BORDER.radius,
    resizeMode: "cover",
  },
  Title: {
    fontSize: FONTSIZES.h3,
    fontFamily: "semibold",
    color: COLORS.black,
  },
  DeliveryTimeText: {
    fontSize: FONTSIZES.h5,
    fontFamily: "regular",
    color: COLORS.gray,
  },
  Description: {
    paddingTop: SPACES.padding / 2,
    paddingBottom: SPACES.padding,
    paddingHorizontal: SPACES.padding
  }
});
