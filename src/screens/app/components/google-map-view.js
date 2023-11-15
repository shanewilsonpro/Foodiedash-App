// Libraries
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";

// Components
import { PlaceMarker } from "./place-marker";

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
  }, [location, coordinates]);

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
    <View style={styles.Container}>
      <MapView
        style={styles.Map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      >
        <Marker title="My location" coordinate={mapRegion} />

        {placeList.map(
          (item, index) => index <= 1 && <PlaceMarker coordinates={item} />
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
