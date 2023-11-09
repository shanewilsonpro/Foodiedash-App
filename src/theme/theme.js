import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
  primary: "#30b9b2",
  primary1: "#00fff53c",
  secondary: "#ffa44f",
  secondary1: "#ffe5db",
  tertiary: "#0078a6",

  gray: "#83829A",
  gray2: "#C1C0C8",
  gray3: "#C1C0C850",

  offwhite: "#F3F4F8",
  white: "#FFFFFF",
  black: "#000000",
  red: "#e81e4d",
  green: " #00C135",
  lightWhite: "#FAFAFC",
};

const FONTSIZES = {
  // Global Font Sizes (https://alexzh.com/jetpack-compose-theme-and-typography/)
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
  subtitle1: 14,
  subtitle2: 12,
  body1: 30,
  body2: 22,
  button: 12,
  caption: 10,
  overline: 8,
};

const SPACES = {
  // Global Space Sizes
  padding: 12,
  margin: 12,
  gap: 12,
  
  xSmall: 2,
  small: 4,
  medium: 6,
  large: 10,
  xLarge: 14,
  xxLarge: 20,
};

const BORDER = {
  // Global Border Sizes
  radius: 10,
  width: 4,
};

const SCREEN = {
  // Global Screen Sizes
  height,
  width,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONTSIZES, SPACES, BORDER, SCREEN, SHADOWS };
