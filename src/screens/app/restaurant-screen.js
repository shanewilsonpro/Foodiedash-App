// Libraries
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RatingInput } from "react-native-stock-star-rating";

// Navigators
import { RestaurantTabs } from "../../navigators/restaurant-tabs";

// Theme
import { COLORS } from "../../theme/theme";

// Styles
import { styles } from "./restaurant-screen.styles";

export const RestaurantScreen = ({ navigation, route }) => {
  const item = route.params;

  // SafeArea Insets
  const insets = useSafeAreaInsets();

  // Presses
  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressShare = () => {};

  const onPressRatings = () => {
    navigation.navigate('Rating')
  }

  return (
    <View style={styles.Screen}>
      <View>
        {/* Restaurant Image Background */}
        <Image source={{ uri: item.imageUrl }} style={styles.ImageBackground} />

        {/* Back Button */}
        <TouchableOpacity
          onPress={onPressBack}
          style={styles.BackButton(insets.top)}
        >
          <Ionicons name="arrow-back-circle" size={50} color={COLORS.white} />
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity
          onPress={onPressShare}
          style={styles.ShareButton(insets.top)}
        >
          <MaterialCommunityIcons
            name="share-circle"
            size={50}
            color={COLORS.white}
          />
        </TouchableOpacity>

        <View style={styles.Ratings}>
          <View style={styles.InnerRatings}>
            <RatingInput rating={Number(item.rating)} size={22} />

            <TouchableOpacity onPress={onPressRatings} style={styles.RatingButton}>
              <Text style={styles.RatingButtonText}>Rate this Store</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.TabsContainer}>
        <RestaurantTabs />
      </View>
    </View>
  );
};
