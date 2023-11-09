// Libraries
import { View, Text, Image } from "react-native";
import { Shadow } from "react-native-shadow-2";

// Styles
import { styles } from "./category-item.styles";

export const CategoryItem = ({ category, selected }) => {
  return (
    <View style={styles.Container}>
      <Shadow offset={[1, 2]} distance={5} startColor="#00000008">
        <View style={styles.ImageContainer(category.value, selected)}>
          <Image source={{ uri: category.imageUrl }} style={styles.Image} />
        </View>
      </Shadow>

      <Text style={styles.Title}>{category.title}</Text>
    </View>
  );
};
