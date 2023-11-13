// Libraries
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import { FoodCard } from "../cards/food-card";

// Data
import data from "../../../../data/data";

// Styles
import { styles } from "./new-food-list.styles";

export const NewFoodList = () => {
  const navigation = useNavigation();

  const onPressFood = (item) => {
    navigation.navigate("Food-Nav", item);
  };

  return (
    <FlatList
      data={data.foods}
      showsHorizontalScrollIndicator={false}
      horizontal
      scrollEnabled
      style={styles.List}
      contentContainerStyle={styles.ListContainer}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <FoodCard item={item} onPress={() => onPressFood(item)} />}
    />
  );
};
