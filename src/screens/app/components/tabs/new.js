// Libraries
import { useContext } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Components
import { FoodTile } from "../food-tile";

// Contexts
import { RestaurantContext } from "../../../../contexts/restaurant-context";

import data from "../../../../data/data";

// Styles
import { styles } from "./new.styles";

export const New = () => {
  const navigation = useNavigation();

  // SafeArea Insets
  const insets = useSafeAreaInsets();

  // Contexts
  const { restaurantObj, setRestaurantObj } = useContext(RestaurantContext);

  // Presses
  const onPressShowDetails = (item) => {
    navigation.navigate("Food-Nav", item);
  };

  return (
    <View style={styles.Container}>
      <FlatList
        data={data.foods}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.Container(insets.bottom)}
        keyExtractor={(item) => item._id}
        scrollEnabled
        renderItem={({ item }) => (
          <FoodTile item={item} showDetails={() => onPressShowDetails(item)} />
        )}
      />
    </View>
  );
};
