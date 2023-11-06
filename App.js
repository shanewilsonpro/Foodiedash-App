import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { hideAsync } from "expo-splash-screen";

import { TabsNavigator } from "./src/navigators/TabsNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
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

  if (!fontsLoaded) {
    // Return a loading indicator or splash screen while fonts are loading or app is initializing
    return;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
