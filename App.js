// Libraries
import { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { hideAsync } from "expo-splash-screen";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Contexts
import { UserLocationContext } from "./src/contexts/user-location-context";
import { UserReversedGeoCode } from "./src/contexts/user-reversed-geo-code";
import { RestaurantContext } from "./src/contexts/restaurant-context";
import { LoginContext } from "./src/contexts/login-context";
import { CartCountContext } from "./src/contexts/CartCountContext";

// Navigators
import { TabsNavigator } from "./src/navigators/tabs-navigator";
import { FoodNavigator } from "./src/navigators/food-navigator";

// Screens
import { RestaurantScreen } from "./src/screens/app/restaurant-screen";
import { RatingScreen } from "./src/screens/app/rating-screen";
import { LoginScreen } from "./src/screens/authentication/login-screen";
import { SignUpScreen } from "./src/screens/authentication/sign-up-screen";

// Constants
import { defaultAddresss } from "./src/constants/constants";

const Stack = createNativeStackNavigator();

export default function App() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [restaurantObj, setRestaurantObj] = useState(null);
  const [login, setLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [fontsLoaded] = useFonts({
    // Regular Fonts
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    black: require("./assets/fonts/Poppins-Black.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    thin: require("./assets/fonts/Poppins-Thin.ttf"),
    extralight: require("./assets/fonts/Poppins-ExtraLight.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),

    // Italic Fonts
    italic: require("./assets/fonts/Poppins-Italic.ttf"),
    blackitalic: require("./assets/fonts/Poppins-BlackItalic.ttf"),
    lightitalic: require("./assets/fonts/Poppins-LightItalic.ttf"),
    bolditalic: require("./assets/fonts/Poppins-BoldItalic.ttf"),
    mediumitalic: require("./assets/fonts/Poppins-MediumItalic.ttf"),
    thinitalic: require("./assets/fonts/Poppins-ThinItalic.ttf"),
    extralightitalic: require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
    extrabolditalic: require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    semibolditalic: require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    (async () => {
      setAddress(defaultAddresss);

      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Permission to access location as denied");
        return;
      }

      let location = await getCurrentPositionAsync({});
      setLocation(location);

      loginStatus();
    })();
  }, []);

  const loginStatus = async () => {
    const userToken = await AsyncStorage.getItem("token");

    if (userToken !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  if (!fontsLoaded) {
    // Return a loading indicator or splash screen while fonts are loading or app is initializing
    return;
  }

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      <UserReversedGeoCode.Provider value={{ address, setAddress }}>
        <RestaurantContext.Provider value={{ restaurantObj, setRestaurantObj }}>
          <LoginContext.Provider value={{ login, setLogin }}>
            <CartCountContext.Provider value={{ cartCount, setCartCount }}>
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen
                    name="Tabs"
                    component={TabsNavigator}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="Food-Nav"
                    component={FoodNavigator}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="Restaurant"
                    component={RestaurantScreen}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="Rating"
                    component={RatingScreen}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </CartCountContext.Provider>
          </LoginContext.Provider>
        </RestaurantContext.Provider>
      </UserReversedGeoCode.Provider>
    </UserLocationContext.Provider>
  );
}
