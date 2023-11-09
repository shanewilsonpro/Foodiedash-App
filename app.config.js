export default ({ config }) => ({
  ...config,
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    config: {
      package: "com.shanewilson.foodiedash",
      googleMaps: {
        apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API,
      },
    },
  },
});
