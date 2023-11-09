// Libraries
import { StyleSheet } from "react-native";

// Theme
import { SPACES } from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ScrollContainer: {
    flexGrow: 1, 
    paddingBottom: SPACES.padding
  },
});