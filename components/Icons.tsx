import COLORS from "@/constants";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function icons() {
  const leagues = [
    {
      image: require("@/assets/images/logo/english.jpg"),
    },
    {
      image: require("@/assets/images/logo/europe.png"),
    },
    {
      image: require("@/assets/images/logo/morroco.png"),
    },
    {
      image: require("@/assets/images/logo/ligue.jpg"),
    },
  ];
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {leagues.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              padding: 1,
              alignItems: "center",
              justifyContent: "center",
              margin: 1,
              width: 70,
              height: 70,
              borderRadius: "50%",
              borderColor: COLORS.white,
              backgroundColor: COLORS.white,
              opacity: 0.8,
              borderWidth: 0,
              shadowColor: COLORS.dark,
                shadowOffset: {
                    width: 100,
                    height: 200,
                },
                shadowOpacity: 0.8,
                shadowRadius: 10,
                elevation: 10,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
              }}
            />
          </View>
        );
      })}
    </View>
  );
}
