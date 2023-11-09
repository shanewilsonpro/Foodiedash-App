// Libraries
import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

// Components
import { CategoryItem } from "../category-item";

// Data
import data from "../../../../data/data";

// Styles
import { styles } from "./category-list.styles";

export const CategoryList = ({
  setSelectedCategory,
  setSelectedSection,
  setSelectedValue,
}) => {
  const [selected, setSelected] = useState(null);

  const onPressCategory = (item) => {
    if (selected == item.value) {
      setSelectedCategory(null);
      setSelected(null);
      setSelectedSection(null);
      setSelectedValue(null);
    } else {
      setSelectedCategory(item._id);
      setSelected(item.value);
      setSelectedSection("category");
      setSelectedValue(item.title);
    }
  };

  return (
    <FlatList
      data={data.categories}
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.ListContainer}
      style={styles.List}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPressCategory(item)}>
          <CategoryItem selected={selected} category={item} />
        </TouchableOpacity>
      )}
    />
  );
};
