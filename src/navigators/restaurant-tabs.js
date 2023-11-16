// Libraries
import { useState } from "react";
import { useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

// Components
import { Directions } from "../screens/app/components/tabs/directions";
import { Menu } from "../screens/app/components/tabs/menu";
import { New } from "../screens/app/components/tabs/new";

// Theme
import { COLORS } from "../theme/theme";

const renderScene = SceneMap({
  first: Menu,
  second: Directions,
  third: New,
});

export const RestaurantTabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Menu" },
    { key: "second", title: "Directions" },
    { key: "third", title: "New" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={{ backgroundColor: COLORS.white }}
          renderLabel={({ route, focused, color }) => (
            <Text
              style={{
                color: focused ? COLORS.primary : COLORS.gray2,
                fontFamily: focused ? "medium" : "regular",
              }}
            >
              {route.title}
            </Text>
          )}
          indicatorStyle={{
            backgroundColor: COLORS.primary,
          }}
        />
      )}
    />
  );
};
