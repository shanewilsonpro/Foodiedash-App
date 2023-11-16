// Libraries
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { RatingInput } from "react-native-stock-star-rating";

// Styles
import { styles } from "./food-tile.styles";

export const FoodTile = ({ item, showDetails }) => {
  return (
    <TouchableOpacity key={item._id} style={styles.Wrapper} onPress={showDetails}>
      <View style={styles.Container}>
        {/* Food Image */}
        <Image source={{ uri: item.imageUrl[0] }} style={styles.Image} />

        {/* Price */}
        <View style={styles.PriceContainer}>
          <Text style={styles.PriceText}>{item.price}</Text>
        </View>

        <View style={{ marginLeft: 10, marginTop: 5 }}>
          <Text style={styles.FoodTitle}>{item.title}</Text>
          <RatingInput rating={Number(item.rating)} size={22} />

          <FlatList
            data={item.foodTags.slice(0, 4)}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.toString()}
            style={styles.FoodTagsList}
            columnWrapperStyle={{ flexWrap: "wrap" }}
            numColumns={3}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View key={item.toString()} style={styles.FoodTag}>
                <Text style={styles.FoodTagText}>{item}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
