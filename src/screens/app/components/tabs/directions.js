// Libraries
import { useContext } from "react";
import { View, Text, TouchableOpacity, Platform, Linking } from "react-native";

// Components
import { GoogleMapView } from "../google-map-view";

// Contexts
import { RestaurantContext } from "../../../../context/restaurant-context";

// Styles
import { styles } from "./directions.styles";

export const Directions = () => {
  const { restaurantObj, setRestaurantObj } = useContext(RestaurantContext);
  const coords = restaurantObj.coords;

  // Presses
  const onPressDirections = () => {
    const url = Platform.select({
      ios: "maps:" + coords.latitude + "," + coords.longitude,
      android: "geo:" + coords.latitude + "," + coords.longitude + "?z=16",
    });

    Linking.openURL(url);
  };

  return (
    <View>
      <GoogleMapView placeList={[coords]} />

      <View style={styles.AddressContainer}>
        <Text style={styles.AddressText}>{coords.address}</Text>

        <TouchableOpacity
          style={styles.DirectionsButton}
          onPress={onPressDirections}
        >
          <Text style={styles.DirectionsButtonText}>Directions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
