// Libraries
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";

// Styles
import { styles } from "./food-card.styles";

export const FoodCard = ({ item, onPress }) => {
  return (
    <Shadow offset={[1, 5]} distance={5} startColor="#00000008">
      <TouchableOpacity onPress={onPress} style={styles.Container}>
        <Image source={{ uri: item.imageUrl[0] }} style={styles.Image} />

        <View style={styles.Description}>
          <Text style={styles.Title}>{item.title}</Text>

          <Text style={styles.DeliveryTimeText}>
            {item.time} - delivery time
          </Text>
        </View>
      </TouchableOpacity>
    </Shadow>
  );
};
