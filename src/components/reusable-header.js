// Libraries
import { Image, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Theme
import { COLORS } from "../theme/theme";

// Styles
import { styles } from "./reusable-header.styles";

export const ReusableHeader = ({ title, backbtn }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      {backbtn === false ? (
        <View></View>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backbtn}
        >
          <Ionicons name="arrow-back-circle" size={40} color={COLORS.white} />
        </TouchableOpacity>
      )}

      <Text style={styles.HeaderText}>{title}</Text>

      <Image
        source={require("../../assets/images/profile.jpg")}
        style={styles.Image}
      />
    </View>
  );
};
