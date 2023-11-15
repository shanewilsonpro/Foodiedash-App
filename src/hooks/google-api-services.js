import axios from "axios";

const calculateDistanceAndTime = async (
  startLat,
  startLng,
  destinationLat,
  destinationLng,
  mode = "bicycling"
) => {
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API;
  const baseUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?";
  const ratePerKm = 1;

  const requestUrl = `${baseUrl}origins=${startLat},${startLng}&destinations=${destinationLat},${destinationLng}&mode=${mode}&key=${apiKey}`;

  try {
    const response = await fetch(requestUrl);
    const data = await response.json();

    // Ensure the request was successful and there are results
    if (data.status === "OK" && data.rows[0].elements[0].status === "OK") {
      const distance = data.rows[0].elements[0].distance.text;
      const duration = data.rows[0].elements[0].duration.text;

      const distanceInKm = parseFloat(distance.replace(" km", ""));
      const price = distanceInKm * ratePerKm;
      const finalPrice = `$${price.toFixed(2)}`;

      return {
        distance,
        duration,
        finalPrice,
      };
    } else {
      console.error("Error calculating distance and duration:", data.status);
      return null;
    }
  } catch (error) {
    console.error("Failed to calculate distance and duration:", error);
    return null;
  }
};

const extractNumbers = (inputStr) => {
  if (typeof inputStr !== "string") {
    return [];
  }
  const matched = inputStr.match(/\d+/g);
  return matched ? matched.map((num) => parseInt(num, 10)) : [];
};

const decode = (encoded) => {
  const points = [];
  let index = 0,
    len = encoded.length;
  let lat = 0,
    lng = 0;

  while (index < len) {
    let shift = 0,
      result = 0;
    let byte;
    do {
      byte = encoded.charCodeAt(index++) - 63; // <-- we use charCodeAt method, not a 'char' property
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    const deltaLat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += deltaLat;

    shift = 0;
    result = 0;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    const deltaLng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += deltaLng;

    points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
  }

  return points;
};

export default {
  calculateDistanceAndTime,
  extractNumbers,
  decode,
};
