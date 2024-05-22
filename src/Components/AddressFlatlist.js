import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import color from "../Constants/color";

export default function AddressFlatlist({ flatdata }) {
  return (
    <FlatList
      data={flatdata}
      // keyExtractor={item=>item.id.toString()}
      renderItem={({ item }) => (
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: color.chinese_silver,
              fontSize: 15,
            }}
          >
            {item.text}
          </Text>
          {<Image source={item.img} />}
        </View>
      )}
    />
  );
}
