// Libraries
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

// Components
import { HomeHeader } from "./components/home-header";
import { CategoryList } from "./components/lists/category-list";
import { ChoiceList } from "./components/lists/choice-list";
import { Heading } from "./components/heading";
import { NearbyRestaurantsList } from "./components/lists/nearby-restaurants-list";
import { NewFoodList } from "./components/lists/new-food-list";
import { FastestNearYouList } from "./components/lists/fastest-near-you-list";

// Styles
import { styles } from "./home.styles";
import { FilteredCategoryList } from "./components/lists/filtered-category-list";

export const HomeScreen = () => {
  // States
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  return (
    <SafeAreaView style={styles.Container}>
      {/* HOME HEADER */}
      <HomeHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollContainer}
      >
        {/* CATEGORIES */}
        <CategoryList
          setSelectedCategory={setSelectedCategory}
          setSelectedSection={setSelectedSection}
          setSelectedValue={setSelectedValue}
        />

        {/* CHOICES LIST */}
        <Heading
          heading={"Pick Restaurants"}
          isViewAllIcon={false}
          onPress={() => {}}
        />
        <ChoiceList
          setSelectedChoice={setSelectedChoice}
          setSelectedSection={setSelectedSection}
        />
        {selectedCategory !== null && selectedSection !== null ? (
          <View>
            <Heading
              heading={`Browse ${selectedValue}`}
              isViewAllIcon={true}
              onPress={() => {}}
            />

            <FilteredCategoryList />
          </View>
        ) : (
          <View>
            {/* NEARBY RESTAURANTS LIST */}
            <Heading
              heading={"Nearby Restaurants"}
              isViewAllIcon={true}
              onPress={() => {}}
            />
            <NearbyRestaurantsList />

            {/* TRY SOMETHING NEW LIST */}
            <Heading
              heading={"Try Something New"}
              isViewAllIcon={true}
              onPress={() => {}}
            />
            <NewFoodList />

            {/* FASTEST NEAR YOU LIST */}
            <Heading
              heading={"Fastest Near You"}
              isViewAllIcon={true}
              onPress={() => {}}
            />
            <FastestNearYouList />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
