// Libraries
import { StyleSheet } from "react-native";

// Theme
import { BORDER, COLORS, FONTSIZES, SCREEN, SPACES } from "../../theme/theme";

export const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
  ImageBackground: {
    height: SCREEN.height / 3,
    width: SCREEN.width,
  },
  TabsContainer: {
    height: 600,
  },
  BackButton: (top) => ({
    marginLeft: SPACES.margin,
    alignItems: "center",
    zIndex: 999,
    position: "absolute",
    top: top,
  }),
  ShareButton: (top) => ({
    marginRight: SPACES.margin,
    alignItems: "center",
    zIndex: 0,
    position: "absolute",
    top: top,
    right: 0,
  }),
  Ratings: {
    height: 50,
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    zIndex: 999,
    bottom: 0,
  },
  InnerRatings: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SPACES.margin,
    alignItems: "center",
  },
  RatingButton: {
    borderColor: COLORS.lightWhite,
    borderWidth: 1,
    borderRadius: BORDER.radius,
    backgroundColor: COLORS.primary,
    padding: SPACES.medium,
  },
  RatingButtonText: {
    fontSize: FONTSIZES.h4,
    fontFamily: "medium",
    color: COLORS.lightWhite,
  },
  RestaurantDetailsContainer: {
    margin: SPACES.medium
  },
  RestaurantTitle: {
    fontSize: FONTSIZES.h2,
    fontFamily: "semibold",
    color: COLORS.black,
  },
  RestaurantHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  RestaurantHeadingLeft: {
    fontSize: FONTSIZES.h4,
    fontFamily: "medium",
    color: COLORS.gray,
  },
  RestaurantHeadingRight: {
    fontSize: FONTSIZES.h4,
    fontFamily: "regular",
    color: COLORS.black,
  },
});
