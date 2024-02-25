import COLORS from "@/constants";

import { useEffect, useState } from "react";
import { View, Text, Image, Modal, TouchableOpacity } from "react-native";
import PlayersItem from "./Player";
import Ionicons from "@expo/vector-icons/Ionicons";
import ServicePlayer from "@/services/servicePlayer";
import { useSelector } from "react-redux";
export default function Players() {
  const [modalVisible, setModalVisible] = useState(false);
  const [playerDetails, setPlayerDetails] = useState<any>({});

  const { players } = useSelector((state: any) => state.players);

  function model() {
    return (
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            top: "10%",
            backgroundColor: COLORS.black,
            borderTopLeftRadius: 10,
           
            borderTopRightRadius: 10,
            
          }}
        >
          <View style={{ padding: 10, margin: 5 }}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Ionicons
                size={30}
                color={COLORS.white}
                name="arrow-back-outline"
              ></Ionicons>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "95%",
                height:300,
                borderColor: COLORS.white,
                borderWidth: 1,
                marginRight: 10,
                marginLeft: 10,
                
                borderRadius: 20,
                marginTop: 10,
              }}
            >
              <View style={{padding:10}}>
                <Image
                  source={{
                    uri: playerDetails?.image_path,
                  }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    marginTop: 20,
                  }}
                />
              </View>
              <View style={{padding:10}}>
                <Text
                  style={{ marginTop: 10, fontSize: 15, color: COLORS.white }}
                >
                  {playerDetails?.position?.name
                    ? playerDetails?.position?.name
                    : "Midfielder"}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: COLORS.white,
                  }}
                >
                  Full Name{" : "}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: COLORS.white,
                  }}
                >
                  {playerDetails?.display_name}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <Text
                  style={{ marginTop: 20, fontSize: 15, color: COLORS.white }}
                >
                  Date of birth{" : "}
                </Text>
                <Text
                  style={{ marginTop: 20, fontSize: 15, color: COLORS.white }}
                >
                  {" "}
                  {playerDetails?.date_of_birth}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <Text
                  style={{ marginTop: 10, fontSize: 15, color: COLORS.white }}
                >
                  Gender{" : "}
                  {playerDetails?.gender}
                </Text>
                <Text
                  style={{ marginTop: 10, fontSize: 15, color: COLORS.white }}
                >
                  Weight{" : "}
                  {playerDetails?.weight}
                </Text>
                <Text
                  style={{ marginTop: 10, fontSize: 15, color: COLORS.white }}
                >
                  Height{" : "}
                  {playerDetails?.weight}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{ marginTop: 10, fontSize: 15, color: COLORS.white }}
                >
                  nationality{" : "}
                </Text>
                <Image
                  source={{
                    uri: playerDetails?.nationality?.image_path,
                  }}
                  style={{
                    marginTop: 10,
                    width: 20,
                    height: 10,
                    top:7
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View>
      {players && players ? (
        players.map((item: any,index:number) => (
          <TouchableOpacity
            key={index}
            onPress={async () => {
              setModalVisible(true);
              await setPlayerDetails(item);
            }}
          >
            <PlayersItem player={item} />
          </TouchableOpacity>
        ))
      ) : (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "95%",
            height: 50,
            backgroundColor: COLORS.blueman,
            marginRight: 10,
            marginLeft: 10,
            borderRadius: 20,
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 20, color: COLORS.white }}>Not Found</Text>
        </View>
      )}
      <View>{model()}</View>
    </View>
  );
}
