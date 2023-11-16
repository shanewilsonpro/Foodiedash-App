// Libraries
import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Components
import { ProfileTile } from "./components/profile-tile";
import { RegistrationTile } from "./components/registration-tile";

// Theme
import { SPACES } from "../../theme/theme";

// Styles
import { styles } from "./profile-screen.styles";

// import fetchProfile from "../hooks/fetchProfile";
// import { LoginContext } from "../contexts/login-context";

const DEFAULT_PROFILE =
  "https://d326fntlu7tb1e.cloudfront.net/uploads/b5065bb8-4c6b-4eac-a0ce-86ab0f597b1e-vinci_04.jpg";
const BACKGROUND =
  "https://d326fntlu7tb1e.cloudfront.net/uploads/ab6356de-429c-45a1-b403-d16f7c20a0bc-bkImg-min.png";

export const ProfileScreen = () => {
  // States
  const [user, setUser] = useState(null);

  // SafeArea Insets
  const insets = useSafeAreaInsets();

  // const { user, isProfileLoading, error, refetch } = fetchProfile();

  // if (isProfileLoading) {
  //   return <LoadingScreen />;
  // }

  return (
    <View style={styles.Screen}>
      {/* Image Background */}
      <Image
        source={{ uri: BACKGROUND }}
        style={[
          StyleSheet.absoluteFillObject,
          {
            opacity: 0.7,
          },
        ]}
      />

      {/* Header */}
      <View style={styles.Header(insets.top)}>
        {/* Left of Header - Profile with Username/Email */}
        <View style={styles.LeftHeader}>
          {/* Profile */}
          <Image
            source={user === null ? { uri: DEFAULT_PROFILE } : user.profile}
            style={styles.Image}
          />

          {/* Username & Email Labels */}
          <View style={styles.UsernameEmailContainer}>
            <Text style={styles.UsernameLabel}>
              {user === null ? "username" : user.username}
            </Text>
            <Text style={styles.EmailLabel}>
              {user === null ? "email" : user.email}
            </Text>
          </View>
        </View>

        {/* Right of Header - Logout Button */}
        <TouchableOpacity>
          <AntDesign name="logout" size={24} color="red" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SPACES.padding }}
      >
        <RegistrationTile
          heading={"Register a restaurant"}
          desc={
            "Join our community and showcase your culinary delights to a wider audience."
          }
        />

        <ProfileTile title={"Orders"} icon={"fast-food-outline"} font={1} />
        <ProfileTile title={"Places"} icon={"heart"} font={2} />
        <ProfileTile title={"Payment History"} icon={"creditcard"} />
        <ProfileTile title={"Coupons"} icon={"tago"} />
        <ProfileTile title={"My Store"} icon={"bag"} font={2} />
        <ProfileTile title={"History"} icon={"globe-outline"} font={1} />

        <RegistrationTile
          heading={"Join the courier team"}
          desc={
            "Embark on a journey, deliver joy, and earn on your own schedule."
          }
        />

        <ProfileTile
          title={"Shipping Address"}
          icon={"location-outline"}
          font={1}
        />
        <ProfileTile title={"Services Center"} icon={"customerservice"} />
        <ProfileTile title={"Settings"} icon={"setting"} />
      </ScrollView>
    </View>
  );
};
