// Libraries
import { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RatingInput } from "react-native-stock-star-rating";

// Navigators
import { RestaurantTabs } from "../../navigators/restaurant-tabs";

// Context
import { UserLocationContext } from "../../context/user-location-context";

// Hooks
import googleApiServices from "../../hooks/google-api-services";

// Theme
import { COLORS } from "../../theme/theme";

// Styles
import { styles } from "./restaurant-screen.styles";

export const RestaurantScreen = ({ navigation, route }) => {
  const item = route.params;

  // States
  const [distanceTime, setDistanceTime] = useState({});
  const [totalTime, setTotalTime] = useState("");

  // Contexts
  const { location, setLocation } = useContext(UserLocationContext);

  // SafeArea Insets
  const insets = useSafeAreaInsets();

  // Presses
  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressShare = () => {};

  const onPressRatings = () => {
    navigation.navigate("Rating");
  };

  useEffect(() => {
    googleApiServices
      .calculateDistanceAndTime(
        item.coords.latitude,
        item.coords.longitude,
        location.coords.latitude,
        location.coords.longitude
      )
      .then((result) => {
        if (result) {
          setDistanceTime(result);
          setTotalTime(
            googleApiServices.extractNumbers(result.duration)[0] +
              googleApiServices.extractNumbers(item.time)[0]
          );
        }
      });
  }, []);

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

            <TouchableOpacity
              onPress={onPressRatings}
              style={styles.RatingButton}
            >
              <Text style={styles.RatingButtonText}>Rate this Store</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Restaurant Details */}
      <View style={styles.RestaurantDetailsContainer}>
        <Text style={styles.RestaurantTitle}>{item.title}</Text>

        <View style={styles.RestaurantHeadingContainer}>
          <Text style={styles.RestaurantHeadingLeft}>Distance</Text>
          <Text style={styles.RestaurantHeadingRight}>
            {distanceTime.distance}
          </Text>
        </View>

        <View style={styles.RestaurantHeadingContainer}>
          <Text style={styles.RestaurantHeadingLeft}>
            Prep and Delivery Time
          </Text>
          <Text style={styles.RestaurantHeadingRight}>{totalTime} mins</Text>
        </View>

        <View style={styles.RestaurantHeadingContainer}>
          <Text style={styles.RestaurantHeadingLeft}>Cost</Text>
          <Text style={styles.RestaurantHeadingRight}>
            {distanceTime.finalPrice}
          </Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.TabsContainer}>
        <RestaurantTabs />
      </View>
    </View>
  );
};
