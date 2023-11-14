// Libraries
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RatingInput } from "react-native-stock-star-rating";

// Components
import { ReusableHeader } from "../../components/reusable-header";

// Theme
import { COLORS } from "../../theme/theme";

// Styles
import { styles } from "./rating-screen.styles";

export const RatingScreen = () => {
  const [rating, setRating] = useState(0);

  return (
    <SafeAreaView style={styles.Wrapper}>
      {/* Image Background Blur */}
      <Image
        source={{
          uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/2d5faf00-e235-4a78-9688-ad4d3280ec03-rating_bk.jpg",
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={30}
      />

      {/* Header */}
      <ReusableHeader title={"Add Ratings"} backbtn={true} />

      <View style={styles.Container}>
        {/* Rating Box */}
        <View style={styles.RatingBox}>
          {/* User Profile Image */}
          <View style={styles.ImageContainer}>
            <Image
              source={require("../../../assets/images/profile.jpg")}
              style={styles.Image}
            />
          </View>

          {/* Rating Input */}
          <View style={styles.RatingInputContainer}>
            <RatingInput
              rating={rating}
              color={COLORS.primary}
              setRating={setRating}
              size={50}
              maxStars={5}
              bordered={false}
            />

            <Text style={styles.RatingInputText}>TAP TO RATE</Text>
          </View>
        </View>

        <View style={styles.Spacer} />

        {/* Submit Button */}
        <TouchableOpacity style={styles.SubmitButton}>
          <Text style={styles.SubmitButtonText}>SUBMIT RATING</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
