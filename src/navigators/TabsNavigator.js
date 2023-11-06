import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Home } from "../screens/home/Home";
import { Cart } from "../screens/cart/Cart";
import { Profile } from "../screens/profile/Profile";
import { Search } from "../screens/search/Search";

import { BORDER, COLORS, FONTSIZES } from "../theme/theme";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  backgroundColor: COLORS.primary,
  borderTopWidth: 0,
  elevation: 0, // This will remove the shadow on Android
  shadowOpacity: 0, // This will remove the shadow on iOS
};

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.secondary}
      tabBarHideKeyBoard={true}
      headerShown={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              color={focused ? COLORS.secondary : COLORS.secondary1}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search"}
              color={focused ? COLORS.secondary : COLORS.secondary1}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 26, height: 26, position: "relative" }}>
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                color={focused ? COLORS.secondary : COLORS.secondary1}
                size={26}
              />

              <View
                style={{
                  position: "absolute",
                  right: -6,
                  top: -3,
                  backgroundColor: "red",
                  borderRadius: BORDER.radius,
                  width: 16,
                  height: 16,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: "extrabold",
                    fontSize: FONTSIZES.h6,
                  }}
                >
                  {10}
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={focused ? COLORS.secondary : COLORS.secondary1}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
