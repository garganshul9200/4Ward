import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import NotificationList from "../../Components/NotificationList";
import { notificationList } from "../../Constants/FlatlistData";
import { NotificationStyle } from "./NotificationStyle";
import WrapperContainer from "../../Components/WrapperContainer";
import strings from "../../Constants/strings";

export default function Notification() {
  return (
    <WrapperContainer>
      <View style={NotificationStyle.notificationView}>
        <Text style={NotificationStyle.notificationtext}>{strings.Notification}</Text>
      </View>

      <FlatList data={notificationList} renderItem={NotificationList} />
    </WrapperContainer>
  );
}
