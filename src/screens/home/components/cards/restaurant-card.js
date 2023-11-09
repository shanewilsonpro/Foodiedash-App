// Libraries
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RatingInput } from "react-native-stock-star-rating";
import { Shadow } from "react-native-shadow-2";

// Theme
import { COLORS } from "../../../../theme/theme";

// Styles
import { styles } from "./restaurant-card.styles";

export const RestaurantCard = ({ item, onPress }) => {
  return (
    <Shadow offset={[1, 5]} distance={5} startColor="#00000008">
      <TouchableOpacity onPress={onPress} style={styles.Container}>
        {/* Restaurant Image */}
        <Image source={{ uri: item.imageUrl }} style={styles.Image} />

        <View style={styles.Description}>
          {/* Restaurant Name Text */}
          <Text style={styles.Title}>{item.title}</Text>

          {/* Delivery Time Text */}
          <Text style={styles.DeliveryTimeText}>
            Delivery under {item.time}
          </Text>

          {/* Ratings  */}
          <View style={styles.RatingsContainer}>
            <RatingInput
              rating={item.rating}
              size={14}
              maxStars={5}
              setRatings={item.rating}
              bordered={false}
              color={COLORS.primary}
            />

            <Text style={styles.RatingNumbersText}>{item.ratingCount}+</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Shadow>
  );
};
