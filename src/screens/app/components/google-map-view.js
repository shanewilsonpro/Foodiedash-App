// Libraries
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";

// Contexts
import { UserLocationContext } from "../../../context/user-location-context";

// Hooks
import googleApiServices from "../../../hooks/google-api-services";

// Theme
import { COLORS } from "../../../theme/theme";

// Styles
import { styles } from "./google-map-view.styles";

export const GoogleMapView = ({ placeList }) => {
  // Contexts
  const { location, setLocation } = useContext(UserLocationContext);

  // States
  const [directions, setDirections] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [mapRegion, setMapRegion] = useState({
    latitude: 35.6855,
    longitude: 139.68884,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    console.log("lol");
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.06,
      });

      fetchDirections(
        placeList[0].latitude,
        placeList[0].longitude,
        location.coords.latitude,
        location.coords.longitude
      );
    }
  }, [location]);

  const fetchDirections = async (
    startLat,
    startLng,
    destinationLat,
    destinationLng
  ) => {
    try {
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLat},${startLng}&destination=${destinationLat},${destinationLng}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API}`;
      const response = await fetch(url);
      const data = await response.json().then((data) => {
        setDirections(data);
        const encodedPolyline = data.routes[0].overview_polyline.points;
        const coordinates = googleApiServices.decode(encodedPolyline);

        setCoordinates(coordinates);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View key={placeList[0].id} style={styles.Container}>
      <MapView
        style={styles.Map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      >
        <Marker title="My location" coordinate={mapRegion} />

        {placeList.map(
          (item, index) =>
            index <= 1 && (
              <Marker
                key={index}
                title={item.title}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                  latitudeDelta: 0.003,
                  longitudeDelta: 0.01,
                }}
              />
            )
        )}

        <Polyline
          coordinates={coordinates}
          strokeColor={COLORS.primary}
          strokeWidth={5}
        />
      </MapView>
    </View>
  );
};
