// Libraries
import { FlatList } from "react-native";

// Components
import { FoodCard } from "../cards/food-card";

// Data
import data from "../../../../data/data";

// Styles
import { styles } from "./fastest-near-you-list.styles";

export const FastestNearYouList = () => {
  return (
    <FlatList
      data={data.foods}
      showsHorizontalScrollIndicator={false}
      horizontal
      scrollEnabled
      style={styles.List}
      contentContainerStyle={styles.ListContainer}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <FoodCard item={item} onPress={() => {}} />}
    />
  );
};
