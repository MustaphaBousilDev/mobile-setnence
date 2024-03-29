import COLORS from "@/constants";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const header = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.blackPrimary,
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Ionicons
          name="reorder-four"
          color={COLORS.white}
          style={{ marginLeft: 15 }}
          size={27}
          onPress={() => {
            console.log("hello");
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.white,
          }}
        >
          KickOff
        </Text>
      </View>
      <View>
        <Ionicons
          name="heart"
          color={COLORS.white}
          style={{ marginRight: 15 }}
          size={27}
          onPress={() => {
            router.push("/(tabs)/favorite");
          }}
        />
      </View>
    </View>
  );
};

export default header;
