// Libraries
import { Text, View, TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";

// Styles
import { styles } from "./registration-tile.styles";

export const RegistrationTile = ({ onPress, heading, desc }) => {
  return (
    <View style={styles.ShadowContainer}>
      <Shadow
        offset={[1, 4]}
        distance={5}
        startColor="#00000008"
        style={styles.Shadow}
      >
        <View style={styles.OuterContainer}>
          <View style={styles.InnerContainer}>
            <View style={styles.LeftSection}>
              <Text style={styles.Heading}>{heading}</Text>
              <Text style={styles.DescriptionText}>{desc}</Text>
            </View>

            <TouchableOpacity style={styles.RegisterButton} onPress={onPress}>
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Shadow>
    </View>
  );
};
