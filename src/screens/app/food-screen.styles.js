// Libraries
import { StyleSheet } from "react-native";

// Theme
import { BORDER, COLORS, FONTSIZES, SCREEN, SPACES } from "../../theme/theme";

export const styles = StyleSheet.create({
  Screen: {
    flexGrow: 1,
    backgroundColor: COLORS.lightWhite,
  },
  ScrollContainer: (bottom) => ({
    paddingBottom: bottom + 50,
  }),
  ImageBackground: {
    width: SCREEN.width,
    height: SCREEN.height / 2.5,
    resizeMode: "stretch",
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
  OpenStoreButton: {
    position: "absolute",
    right: 3,
    bottom: 50,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    backgroundColor: COLORS.primary,
  },
  OpenStoreText: {
    color: COLORS.lightWhite,
    fontFamily: "bold",
    fontSize: FONTSIZES.h4,
  },
  FoodDetailsContainer: {
    borderTopLeftRadius: BORDER.radius * 4,
    borderTopRightRadius: BORDER.radius * 4,
    marginTop: -40,
    padding: SPACES.xxLarge,
    backgroundColor: COLORS.lightWhite,
  },
  TitleAndPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  FoodTitle: {
    fontSize: FONTSIZES.h2,
    fontFamily: "bold",
    color: COLORS.black,
    flex: 1,
  },
  PriceText: {
    fontSize: FONTSIZES.h2,
    fontFamily: "semibold",
    color: COLORS.primary,
  },
  DescriptionText: {
    fontSize: FONTSIZES.h5,
    fontFamily: "regular",
    color: COLORS.gray,
    textAlign: "justify",
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
    fontSize: FONTSIZES.h5,
    fontFamily: "regular",
    paddingHorizontal: SPACES.small,
    color: COLORS.lightWhite,
  },
  Subtitle: {
    fontSize: FONTSIZES.h3,
    fontFamily: "semibold",
    color: COLORS.black,
    marginVertical: SPACES.large,
  },
  ItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SPACES.large,
  },
  ItemText: {
    fontSize: FONTSIZES.h5,
    fontFamily: "regular",
    color: COLORS.gray,
    textAlign: "justify",
  },
  InputContainer: {
    borderColor: COLORS.primary1,
    borderWidth: 1,
    backgroundColor: COLORS.offwhite,
    height: 50,
    borderRadius: BORDER.radius,
    paddingHorizontal: SPACES.padding,
    alignItems: "center",
    flexDirection: "row",
  },
  Input: {
    flex: 1,
  },
  QuantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SPACES.large,
  },
  BottomBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
  },
  Suspended: (bottom) => ({
    position: "absolute",
    zIndex: 999,
    bottom: bottom,
    right: 0,
    left: 0,
    width: "100%",
    alignItems: "center",
  }),
  Cart: {
    width: SCREEN.width - 24,
    height: 60,
    justifyContent: "center",
    backgroundColor: COLORS.primary1,
    borderRadius: 30,
  },
  CartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SPACES.margin,
  },
  AddButton: {
    width: 40,
    height: 40,
    borderRadius: 99,
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    alignItems: "center",
  },
  NumbersButton: {
    width: 40,
    height: 40,
    borderRadius: 99,
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    alignItems: "center",
  },
  OrderButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 80,
    borderRadius: BORDER.radius * 3,
    justifyContent: "center",
  },
  OrderText: {
    color: COLORS.white,
    fontFamily: "semibold",
    fontSize: FONTSIZES.h3,
  },
  NumbersText: {
    color: COLORS.white,
    fontFamily: "medium",
    fontSize: FONTSIZES.h3,
  },
});
