// Libraries
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";

// Screens
import { FoodScreen } from "../screens/app/food-screen";
import { OrderScreen } from "../screens/app/order-screen";

const Stack = createNativeStackNavigator();

export const FoodNavigator = () => {
  const route = useRoute();
  const item = route.params;

  return (
    <Stack.Navigator initialRouteName="Food">
      <Stack.Screen
        name="Food"
        component={FoodScreen}
        options={{ headerShown: false }}
        initialParams={{ item: item }}
      />

      <Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};
