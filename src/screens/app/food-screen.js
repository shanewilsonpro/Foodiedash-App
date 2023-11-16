// Libraries
import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Components
import { Counter } from "./components/counter";

// Theme
import { COLORS } from "../../theme/theme";

// Styles
import { styles } from "./food-screen.styles";

export const FoodScreen = ({ route, navigation }) => {
  const item = route.params.item;

  // States
  const [isChecked, setIsChecked] = useState(false);
  const [additives, setAdditives] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurant, setRestaurant] = useState(1);
  const [count, setCount] = useState(1);
  const [preference, setPreference] = useState("");
  let sendToOrderPage;
  const id = item.restaurant;
  // const {cartCount, setCartCount} = useContext(CartCountContext)

  // SafeArea Insets
  const insets = useSafeAreaInsets();

  // Presses
  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressShare = () => {};

  const onPressOpenStore = () => {};

  const onPressOrder = () => {
    navigation.navigate("Order", sendToOrderPage);
  };

  const onPressAdditives = (newAdditive) =>
    setAdditives((prevAdditives) => {
      const exists = prevAdditives.some(
        (additive) => additive.id === newAdditive.id
      );

      if (exists) {
        return prevAdditives.filter(
          (additive) => additive.id !== newAdditive.id
        );
      } else {
        return [...prevAdditives, newAdditive];
      }
    });

  const onPressCart = (item) => {
    const cartItem = {
      productId: item._id,
      additives: additives,
      quantity: count,
      totalPrice: (item.price + totalPrice) * count,
    };
    addToCart(cartItem);
  };

  sendToOrderPage = {
    orderItem: {
      foodId: item._id,
      additives: additives,
      quantity: count,
      price: (item.price + totalPrice) * count,
      instructions: preference,
    },
    title: item.title,
    description: item.description,
    imageUrl: item.imageUrl[0],
    restaurant: id,
  };

  const addToCart = async (cartItem) => {};

  const calculatePrice = () => {
    const total = additives.reduce((sum, additive) => {
      return sum + parseFloat(additive.price);
    }, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    calculatePrice();
  }, [additives]);

  return (
    <>
      <ScrollView
        style={styles.Screen}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollContainer(insets.bottom)}
        bounces={false}
      >
        <View>
          {/* Food Image Background */}
          <Image
            source={{ uri: item.imageUrl[0] }}
            style={styles.ImageBackground}
          />

          {/* Back Button */}
          <TouchableOpacity
            onPress={onPressBack}
            style={styles.BackButton(insets.top)}
          >
            <Ionicons name="arrow-back-circle" size={40} color={COLORS.white} />
          </TouchableOpacity>

          {/* Share Button */}
          <TouchableOpacity
            onPress={onPressShare}
            style={styles.ShareButton(insets.top)}
          >
            <MaterialCommunityIcons
              name="share-circle"
              size={40}
              color={COLORS.white}
            />
          </TouchableOpacity>

          {/* Open Store Button */}
          <TouchableOpacity
            onPress={onPressOpenStore}
            style={styles.OpenStoreButton}
          >
            <Text style={styles.OpenStoreText}>Open the Store</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.FoodDetailsContainer}>
          {/* Food Title and Price */}
          <View style={styles.TitleAndPriceContainer}>
            <Text style={styles.FoodTitle}>{item.title}</Text>
            <Text style={styles.PriceText}>
              ${(item.price + totalPrice) * count}
            </Text>
          </View>

          {/* Food Description */}
          <Text style={styles.DescriptionText}>{item.description}</Text>

          {/* Food Tags */}
          <FlatList
            data={item.foodTags}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.toString()}
            style={styles.FoodTagsList}
            columnWrapperStyle={{ flexWrap: "wrap" }}
            numColumns={5}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View key={item.toString()} style={styles.FoodTag}>
                <Text style={styles.FoodTagText}>{item}</Text>
              </View>
            )}
          />

          {/* Additivies and Toppings Subtitle */}
          <Text style={styles.Subtitle}>Additives and Toppings</Text>

          {/* Additivies and Toppings List */}
          <FlatList
            data={item.additives}
            keyExtractor={(item) => item.id}
            style={{ marginTop: 10 }}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.ItemContainer}>
                <BouncyCheckbox
                  size={20}
                  unfillColor="#FFFFFF"
                  fillColor={COLORS.primary}
                  textStyle={styles.ItemText}
                  text={item.title}
                  onPress={() => {
                    onPressAdditives(item);
                  }}
                />

                <Text style={styles.ItemText}>$ {item.price}</Text>
              </View>
            )}
          />

          {/* Preferences Subtitle */}
          <Text style={styles.Subtitle}>Preferences</Text>

          {/* Text Input */}
          <View style={styles.InputContainer}>
            <TextInput
              placeholder="Add specific instructions"
              value={preference}
              onChangeText={(value) => setPreference(value)}
              autoCapitalize={"none"}
              autoCorrect={false}
              style={styles.Input}
            />
          </View>

          {/* Quantity Subtitle */}
          <View style={styles.QuantityContainer}>
            <Text style={styles.Subtitle}>Quantity</Text>

            {/* Quantity Counter */}
            <Counter count={count} setCount={setCount} />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar Buttons */}
      <View style={styles.BottomBar}>
        <View style={styles.Suspended(insets.bottom)}>
          <View style={styles.Cart}>
            <View style={styles.CartRow}>
              {/* Add Button */}
              <TouchableOpacity onPress={() => {}} style={styles.AddButton}>
                <AntDesign name="pluscircleo" size={24} color={COLORS.white} />
              </TouchableOpacity>

              {/* Order Button */}
              <TouchableOpacity
                onPress={onPressOrder}
                style={styles.OrderButton}
              >
                <Text style={styles.OrderText}>Order</Text>
              </TouchableOpacity>

              {/* Numbers Button */}
              <TouchableOpacity onPress={() => {}} style={styles.NumbersButton}>
                <Text style={styles.NumbersText}>0</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
