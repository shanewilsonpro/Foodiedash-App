// Libraries
import { useContext } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import { RestaurantCard } from "../cards/restaurant-card";

// Contexts
import { RestaurantContext } from "../../../../context/restaurant-context";

// Data
import data from "../../../../data/data";

// Styles
import { styles } from "./nearby-restaurants-list.styles";

export const NearbyRestaurantsList = () => {
  const navigation = useNavigation();
  const {restaurantObj, setRestaurantObj} = useContext(RestaurantContext)

  // Presses
  const onPressRestaurant = (item) => {
    navigation.navigate("Restaurant", item, setRestaurantObj(item));
  };

  return (
    <FlatList
      data={data.restaurants}
      showsHorizontalScrollIndicator={false}
      horizontal
      scrollEnabled
      style={styles.List}
      contentContainerStyle={styles.ListContainer}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <RestaurantCard item={item} onPress={() => onPressRestaurant(item)} />
      )}
    />
  );
};
