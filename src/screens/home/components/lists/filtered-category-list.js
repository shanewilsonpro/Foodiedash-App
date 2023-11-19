// Libraries
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import { FoodTile } from "../../../app/components/food-tile";

// Data
import data from "../../../../data/data";

export const FilteredCategoryList = () => {
  // Navigation
  const navigation = useNavigation();

  // Presses
  const onPressFood = (item) => {
    navigation.navigate("Food-Nav", item);
  };

  return (
    <FlatList
      data={data.foods}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <FoodTile item={item} onPress={() => onPressFood(item)} />
      )}
    />
  );
};
