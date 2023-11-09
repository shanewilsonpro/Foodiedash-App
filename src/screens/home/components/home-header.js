// Libraries
import { useContext, useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { reverseGeocodeAsync } from "expo-location";

// Contexts
import { UserReversedGeoCode } from "../../../context/user-reversed-geo-code";

// Styles
import { styles } from "./home-header.styles";
import { UserLocationContext } from "../../../context/user-location-context";

export const HomeHeader = () => {
  // States
  const [time, setTime] = useState(null);

  // Contexts
  const { address, setAddress } = useContext(UserReversedGeoCode);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location !== null) {
      reverseGeoCode(location.coords.latitude, location.coords.longitude);
    }
  }, [location]);

  const reverseGeoCode = async (latitude, longitude) => {
    const reversedGeoCodedAddress = await reverseGeocodeAsync({
      longitude: longitude,
      latitude: latitude,
    });

    setAddress(reversedGeoCodedAddress[0]);
    const getTime = getTimeOfDay();
    setTime(getTime);
  };

  const getTimeOfDay = () => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 0 && hour < 12) {
      return "🌞  ";
    } else if (hour >= 12 < 17) {
      return "🌤️  ";
    } else {
      return "🌙  ";
    }
  };

  return (
    <View style={styles.OuterContainer}>
      <View style={styles.InterContainer}>
        {/* PROFILE IMAGE */}
        <Image
          source={require("../../../../assets/images/profile.jpg")}
          style={styles.ProfileImage}
        />

        {/* HEADER */}
        <View style={styles.Header}>
          <Text style={styles.HeadingText}>Delivering to</Text>
          <Text
            style={styles.AddressText}
          >{`${address.city} ${address.name}`}</Text>
        </View>
      </View>

      {/* TIME EMOJI */}
      <Text style={styles.TimeEmoji}>{time}</Text>
    </View>
  );
};
