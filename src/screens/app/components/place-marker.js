// Libraries
import { Marker } from "react-native-maps";

export const PlaceMarker = ({ coordinates }) => {
  return (
    <Marker
      key={coordinates.id}
      title={coordinates.title}
      coordinate={{
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.01,
      }}
    />
  );
};
