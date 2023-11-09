// Libraries
import { useState } from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";

// Data
import data from "../../../../data/data";

// Styles
import { styles } from "./choice-list.styles";

export const ChoiceList = ({ setSelectedChoice, setSelectedSection }) => {
  // States
  const [selected, setSelected] = useState(null);

  // Presses
  const onPressChoice = (item) => {
    if (selected === item.value) {
      setSelected(null);
      setSelectedChoice(null);
      setSelectedSection(null);
    } else {
      setSelected(item.value);
      setSelectedChoice(item.value);
      setSelectedSection("restaurant");
    }
  };

  return (
    <FlatList
      data={data.choices}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      scrollEnabled
      contentContainerStyle={styles.ListContainer}
      style={styles.List}
      renderItem={({ item }) => (
        <Shadow offset={[1, 5]} distance={5} startColor="#00000008">
          <TouchableOpacity
            onPress={() => onPressChoice(item)}
            style={styles.Button(selected, item.value)}
          >
            <Text style={styles.ChoiceText(item.value, selected)}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </Shadow>
      )}
    />
  );
};
