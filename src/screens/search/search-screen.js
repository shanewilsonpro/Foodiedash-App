// Libraries
import { useRef, useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

// Data
import data from "../../data/data";

// Theme
import { COLORS } from "../../theme/theme";

// Styles
import { styles } from "./search-screen.styles";
import { FoodTile } from "../app/components/food-tile";

export const SearchScreen = () => {
  // States
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Refs
  const animation = useRef(null);

  // Presses
  const onPressCancelSearch = () => {
    setSearchKey("");
    setSearchResults([]);
  };

  // Functions
  const handleSearch = () => {
    try {
      if (searchKey === "") {
        setSearchResults([]);
      } else {
        setSearchResults(data.foods);
      }
    } catch (error) {
      console.log("Failed to get products", error);
    }
  };

  return (
    <SafeAreaView style={styles.Screen} edges={["top", "right", "left"]}>
      {/* Search Bar */}
      <View style={styles.SearchBarContainer}>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.Input}
            value={searchKey}
            onChangeText={setSearchKey}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
            placeholder="What do you want to eat?"
          />
        </View>

        {/* Cancel Search Button */}
        {searchKey !== "" && (
          <TouchableOpacity
            style={styles.SearchButton}
            onPress={onPressCancelSearch}
          >
            <MaterialIcons name="cancel" size={24} color={COLORS.secondary} />
          </TouchableOpacity>
        )}
      </View>

      {/* No Search Results  */}
      {searchResults.length === 0 ? (
        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
          <LottieView
            autoPlay
            ref={animation}
            style={styles.Lottie}
            source={require("../../../assets/lottie/cook.json")}
          />
        </ScrollView>
      ) : (
        // Search Results List
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <FoodTile item={item} onPress={() => onPressFood(item)} />
          )}
        />
      )}
    </SafeAreaView>
  );
};
