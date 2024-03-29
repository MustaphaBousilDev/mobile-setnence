import Header from "@/components/Header";
import COLORS from "@/constants";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { useState } from "react";
import MatchItem from "@/components/match/Match";

export default function Favorite() {
  const { favorites } = useSelector((state: any) => state.favorites);
  const [modalVisible, setModalVisible] = useState(false);

  const [active, setActive] = useState(true);
  return (
    <View>
      <View>
        <Header />
      </View>
      <ScrollView
        style={{
          marginBottom: 60,
          backgroundColor:"#333",
        }}
      >
        <View>
          {favorites.map((league: any, i: any) => {
            if (i === 0) {
              return null;
            }

            return (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <MatchItem match={league} favorite={false} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
