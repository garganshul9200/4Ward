import React from "react";
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { HomeStyle } from "./HomeStyle";
import ImagePath from "../../Constants/ImagePath";
import HomeCard from "../../Components/HomeCard";
import WrapperContainer from "../../Components/WrapperContainer";
import open from "react-native-open-maps";

export default function Home() {
  return (
    <WrapperContainer>
      <View style={HomeStyle.iconView}>
        <Image source={ImagePath.homeImage} style={HomeStyle.iconImg} />
        <TouchableOpacity style={{color: 'green'}}
          onPress={() =>
            open({ latitude: 30.71923776993991, longitude: 76.81066575861746 } )
            // open({ latitude: 31.1110, longitude: 77.1394 } )//HPU
          }
        >
            <Image source={ImagePath.locationIcon} style={HomeStyle.iconImg} />
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 117, paddingTop:0}}>
        <HomeCard />
      </View>
    </WrapperContainer>
  );
}
