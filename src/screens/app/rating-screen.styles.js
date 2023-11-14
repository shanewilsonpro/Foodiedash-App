// Libraries
import { StyleSheet } from "react-native";

// Theme
import { BORDER, COLORS, FONTSIZES, SPACES } from "../../theme/theme";

export const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  Container: {
    marginHorizontal: SPACES.margin,
  },
  RatingBox: {
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 20,
    height: 140,
    backgroundColor: "#c2f0ff59",
    borderRadius: 12,
  },
  ImageContainer: {
    position: "absolute",
    zIndex: 999,
    top: -30,
  },
  Image: {
    width: 70,
    height: 70,
    borderRadius: 99,
    resizeMode: "cover",
  },
  RatingInputContainer: {
    paddingTop: 40,
  },
  RatingInputText: {
    fontSize: FONTSIZES.h3,
    fontFamily: "medium",
    textAlign: "center",
    marginTop: SPACES.medium,
    color: COLORS.black,
  },
  SubmitButton: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: BORDER.radius,
    justifyContent: "center",
    alignItems: "center",
  },
  SubmitButtonText: {
    fontSize: FONTSIZES.h3,
    fontFamily: "bold",
    color: COLORS.lightWhite,
  },
  Spacer: {
    height: 50,
  },
});
