//import liraries
import React from "react";
import { View, Text, Image } from "react-native";
import ImagePath from "../Constants/ImagePath";
import color from "../Constants/color";

// create a component
const GetStartedCard = ({ leftMargin }) => {
  return (
    <View style={{marginLeft:8, }}>
      <View
        style={{
          width: 328,
          height: 647,
          marginTop: 30,
          marginLeft: leftMargin,
          backgroundColor: color.matterHorn,
          borderRadius: 25,
        }}
      >
        <Image
          source={ImagePath.getStartedImg}
          style={{
            marginHorizontal: 30,
            marginTop: 100,
          }}
        />

        <Text
          style={{
            marginTop: 100,
            color: color.white,
            textAlign: "center",
            fontSize: 22,
          }}
        >
          Hendreit Vulputate sem
        </Text>
        <Text
          style={{
            color: color.gray60,
            textAlign: "center",
            fontSize: 13,
            margin: 24,
            paddingBottom: 100,
          }}
        >
          Aenean et convallis nulla. Donec in efficitur nisi, et vestibulum quam
          aenean.
        </Text>
      </View>
    </View>
  );
};

//make this component available to the app
export default GetStartedCard;
