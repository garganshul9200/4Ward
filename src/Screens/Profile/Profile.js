import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import ProfileComp from "../../Components/ProfileComp";
import ImagePath from "../../Constants/ImagePath";
import { ProfileStyle } from "./ProfileStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkStatus } from "../../redux/actions/loginAction";
import WrapperContainer from "../../Components/WrapperContainer";
import strings from "../../Constants/strings";

export default function Profile({ navigation }) {
  const signOut = async () => {
    checkStatus(false);
    await AsyncStorage.removeItem("userCreds");
  };

  return (
    //wrapperStyle={{backgroundColor:'grey'}}
    <WrapperContainer >
      <View style={ProfileStyle.topTextView}>
        <Text style={ProfileStyle.topText}>{strings.Profile}</Text>
      </View>
      <ProfileComp
        addText={"Edit Profile"}
        onPress={() => {
          navigation.navigate("EditProfile");
        }}
        imgPath={ImagePath.userIcon}
      />
      <ProfileComp
        addText={"Change Password"}
        onPress={() => {
          navigation.navigate("ChangePassword");
        }}
        imgPath={ImagePath.keyIcon}
      />
      <ProfileComp
        addText={"Signout"}
        onPress={() => {
          signOut();
        }}
        imgPath={ImagePath.signOut}
      />
    </WrapperContainer>
  );
}
