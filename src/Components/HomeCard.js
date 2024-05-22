import React from "react";
import { View, Image, Text, FlatList, StyleSheet, Button } from "react-native";

import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import ImagePath from "../Constants/ImagePath";
import { homeData } from "../Constants/FlatlistData";
import color from "../Constants/color";
import { Share } from "react-native";
import { TouchableOpacity } from "react-native";

const url =
  "https://www.google.com/maps/place/Chaog,+Himachal+Pradesh/data=!4m2!3m1!1s0x39057b4294ef1f37:0x8aaf03a3d4d1fb9c?sa=X&ved=2ahUKEwi7_Yno57aAAxUvS2wGHQlHDvYQ8gF6BAglEAA&ved=2ahUKEwi7_Yno57aAAxUvS2wGHQlHDvYQ8gF6BAgqEAI";
const onShare = async () => {
  try {
    const result = await Share.share({
      message: "Share Now" + "\n" + url,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const HomeCard = () => {
  return (
    // <View style={{borderBottom: 250}}>
    <FlatList
      data={homeData}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.headerView}>
            <View style={styles.headerSubView}>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Image source={item.userImg} style={styles.logoImg} />
                <View style={styles.nameAddressView}>
                  <Text style={styles.unameText}>{item.uName}</Text>
                  <Text style={styles.addressText}>{item.address}</Text>
                </View>
              </TouchableOpacity>
              <Image source={ImagePath.dotsIcon} style={styles.dotsIcon} />
            </View>
          </View>

          <View style={styles.homeImgView}>
            <Image source={item.postedImg} style={styles.homeImg} />
          </View>

          <View style={styles.mainDescriptionView}>
            <View style={styles.descriptionView}>
              <Text style={styles.descriptionText}>{item.imgDescription}</Text>
            </View>
            <View style={styles.timeView}>
              <Text style={styles.timeText}>{item.timeText}</Text>
            </View>

            <View style={styles.commentLikesView}>
              <Text style={styles.commentLikes}>{item.commentText}</Text>
              <Text style={styles.commentLikes}>{item.likesText}</Text>
              <TouchableOpacity onPress={onShare}>
                <Image source={ImagePath.directionIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(24),
    backgroundColor: color.matterHorn,
    borderRadius: 8,
  },

  headerView: {
    margin: moderateScale(16),
  },

  headerSubView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  logoImg: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },

  nameAddressView: {
    marginLeft: moderateScale(16),
  },

  unameText: {
    fontSize: 16,
    color: color.white,
  },

  addressText: {
    fontSize: 13,
    color: color.dark_grey,
  },

  dotsIcon: {
    height: moderateScale(40),
    resizeMode: "contain",
  },

  homeImgView: {
    marginHorizontal: moderateScale(8),
    marginBottom: moderateVerticalScale(3.5),
  },

  homeImg: {
    width: moderateScale(305),
  },

  mainDescriptionView: {
    marginTop: moderateVerticalScale(20),
    marginHorizontal: 16,
  },

  descriptionView: {
    marginTop: 16.9,
  },

  descriptionText: {
    fontSize: 15,
    color: color.white,
  },

  timeView: {
    marginTop: 16.9,
  },

  timeText: {
    fontSize: 13,
    color: color.gray75,
  },

  commentLikesView: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  commentLikes: {
    fontSize: 15,
    color: color.white,
  },
});

export default HomeCard;
