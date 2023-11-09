// Libraries
import { StyleSheet } from "react-native";

// Theme
import { COLORS, FONTSIZES, SPACES } from "../../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    width: 65,
    justifyContent: "center",
  },
  ImageContainer: (categoryValue, selected) => ({
    backgroundColor:
      categoryValue == selected ? COLORS.secondary : COLORS.gray3,
    width: 55,
    height: 55,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  }),
  Image: {
    width: 40,
    height: 40,
  },
  Title: {
    fontSize: FONTSIZES.h5,
    fontFamily: "regular",
    paddingTop: SPACES.xSmall,
  },
});
