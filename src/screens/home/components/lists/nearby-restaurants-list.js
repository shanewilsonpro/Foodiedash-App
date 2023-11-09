// Libraries
import { FlatList } from "react-native";

// Components
import { RestaurantCard } from "../cards/restaurant-card";

// Data
import data from "../../../../data/data";

// Styles
import { styles } from "./nearby-restaurants-list.styles";

export const NearbyRestaurantsList = () => {
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
        <RestaurantCard item={item} onPress={() => {}} />
      )}
    />
  );
};
