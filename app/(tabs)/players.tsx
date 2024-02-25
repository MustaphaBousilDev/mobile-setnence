import Header from "@/components/Header";
import PlayersI from "@/components/Player";
import COLORS from "@/constants";
import ServicePlayer from "@/services/servicePlayer";
import { useEffect, useState } from "react";
import { Text, View, ImageBackground, Image, ScrollView } from "react-native";
import SearchPlayer from "@/components/Player/Search";

export default function Players() {
  return (
    <View>
      <View>
        <Header />
      </View>
      <ScrollView
        style={{
          marginBottom: 65,
          backgroundColor:COLORS.gray
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.black,
            width: "100%",
            height: 100,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: COLORS.white,
              padding: 5,
              marginLeft: 20,
              marginTop: 20,
              fontWeight: "600",
            }}
          >
            Players Centre
          </Text>
        </View>
        <View>
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Text
              style={{
                color: COLORS.blackPrimary,
                fontWeight: "600",
                fontSize: 20,
              }}
            >
              All players
            </Text>
            <SearchPlayer />
          </View>
        </View>
        <View>
          <PlayersI />
        </View>
      </ScrollView>
    </View>
  );
}
