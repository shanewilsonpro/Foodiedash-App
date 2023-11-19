// Libraries
import { StyleSheet } from "react-native";

// Theme
import { BORDER, COLORS, SPACES } from "../../theme/theme";

export const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  SearchBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SPACES.xLarge,
    marginVertical: SPACES.medium,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: BORDER.radius,
    height: 50,
  },
  InputContainer: {
    flex: 1,
  },
  Input: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
  },
  SearchButton: {
    width: 50,
    height: "100%",
    borderRadius: BORDER.radius,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightBlue,
  },
  Lottie: {
    width: "100%",
    height: "100%",
  },
});
