// Libraries
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";

// Theme
import { COLORS, SPACES } from "../../../theme/theme";

// Styles
import { styles } from "./profile-tile.styles";

export const ProfileTile = ({ onPress, title, icon, font }) => {
  return (
    <View style={styles.ShadowContainer}>
      <Shadow
        offset={[1, 4]}
        distance={5}
        startColor="#00000008"
        style={styles.Shadow}
      >
        <TouchableOpacity onPress={onPress}>
          <View style={styles.OuterContainer}>
            <View style={styles.InnerContainer}>
              {font === 1 ? (
                <Ionicons name={icon} size={24} color={COLORS.gray} />
              ) : font === 2 ? (
                <SimpleLineIcons name={icon} size={20} color={COLORS.gray} />
              ) : (
                <AntDesign name={icon} size={22} color={COLORS.gray} />
              )}
              <Text style={styles.Title}>{title}</Text>
            </View>

            <AntDesign
              name="right"
              size={18}
              color={COLORS.gray2}
              style={{ paddingRight: SPACES.padding }}
            />
          </View>
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};
