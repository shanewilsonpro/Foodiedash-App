// Libraries
import { View, Text } from "react-native";

export const OrderScreen = ({ route }) => {
  const order = route.params;

  return (
    <View>
      <Text>order-screen</Text>
    </View>
  );
};
