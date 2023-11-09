// Libraries
import { StyleSheet } from "react-native";

// Theme
import { BORDER, COLORS, FONTSIZES, SPACES } from "../../../../theme/theme";

export const styles = StyleSheet.create({
  List: {
    paddingTop: SPACES.padding / 2,
    paddingBottom: SPACES.padding,
  },
  ListContainer: {
    gap: SPACES.gap,
    paddingHorizontal: SPACES.padding,
  },
  Button: (selected, itemValue) => ({
    backgroundColor:
      selected === itemValue ? COLORS.secondary : COLORS.lightWhite,
    height: 40,
    borderRadius: BORDER.radius,
    justifyContent: "center",
  }),
  ChoiceText: (itemValue, selected) => ({
    marginHorizontal: 10,
    fontFamily: "regular",
    fontSize: FONTSIZES.h5,
    color: itemValue === selected ? COLORS.lightWhite : COLORS.gray,
  }),
});
