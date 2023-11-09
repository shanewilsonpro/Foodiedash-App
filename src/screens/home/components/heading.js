// Libraries
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Theme
import { COLORS } from "../../../theme/theme";

// Styles
import { styles } from "./heading.styles";

export const Heading = ({ heading, onPress, isViewAllIcon }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.HeadingText}>{heading}</Text>

      {isViewAllIcon && (
        <TouchableOpacity onPress={onPress}>
          <Ionicons name="grid" size={20} color={COLORS.secondary} />
        </TouchableOpacity>
      )}
    </View>
  );
};
