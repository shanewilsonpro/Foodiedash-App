// Libraries
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Theme
import { COLORS, SPACES } from "../theme/theme";

export const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.BackButton}>
      <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BackButton: {
    alignItems: "center",
    position: "absolute",
    zIndex: 999,
    top: SPACES.large - 10,
  },
});
