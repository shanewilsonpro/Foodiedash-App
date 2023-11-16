// Libraries
import { StyleSheet } from "react-native";

// Theme
import { COLORS, FONTSIZES, SCREEN, SPACES } from "../../theme/theme";

export const styles = StyleSheet.create({
  Screen: {
    backgroundColor: COLORS.white,
  },
  cover: {
    height: SCREEN.height / 2.4,
    width: SCREEN.width,
    marginBottom: SPACES.xxLarge,
  },
  Title: {
    marginVertical: 20,
    marginHorizontal: 60,
    fontFamily: "bold",
    fontSize: 35,
    color: COLORS.primary,
    textAlign: "center",
  },
  wrapper: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "regular",
    fontSize: FONTSIZES.xSmall,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: "right",
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  }),
  iconStyle: {
    marginRight: 10,
  },
  errorMessage: {
    color: COLORS.red,
    fontFamily: "regular",
    marginTop: 5,
    marginLeft: 5,
    fontSize: FONTSIZES.h4,
  },
  registration: {
    marginTop: 20,
    textAlign: "center",
  },
});