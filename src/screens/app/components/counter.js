// Libraries
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// Theme
import { COLORS } from "../../../theme/theme";

// Styles
import { styles } from "./counter.styles";

export const Counter = ({ count, setCount }) => {
  const onPressIncrement = () => {
    setCount(count + 1);
  };

  const onPressDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.Container}>
      {/* Minus Button */}
      <AntDesign
        name="minuscircleo"
        size={26}
        color={COLORS.primary}
        onPress={onPressDecrement}
      />

      {/* Count Text */}
      <Text style={styles.CountText}>{count}</Text>

      {/* Plus Button */}
      <AntDesign
        name="pluscircleo"
        size={26}
        color={COLORS.primary}
        onPress={onPressIncrement}
      />
    </View>
  );
};
