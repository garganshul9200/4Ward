import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import RedButton from "../../Components/RedButton";
import WhiteButton from "../../Components/WhiteBtn";
import ImagePath from "../../Constants/ImagePath";
import { PostDetailStyle } from "./PostDetailStyle";
import WrapperContainer from "../../Components/WrapperContainer";
import strings from "../../Constants/strings";

export default function PostDetail({ navigation }) {
  return (
    <WrapperContainer>
      <View style={PostDetailStyle.topView}>
        <View style={PostDetailStyle.addImgView}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={ImagePath.backArrow}
              style={PostDetailStyle.addImageImg}
            />
          </TouchableOpacity>
          <Text style={PostDetailStyle.addImageText}>{strings.Add_info}</Text>
        </View>
        <View style={PostDetailStyle.plusView}>
          <Text style={PostDetailStyle.plusText}>+</Text>
        </View>

        <View style={PostDetailStyle.descriptionView}>
          <TextInput
            placeholder="Write description here..."
            placeholderTextColor={"rgba(255,255,255,0.5)"}
          />
        </View>
        <View style={PostDetailStyle.locationView}>
          <TextInput
            placeholder="Add Location"
            placeholderTextColor={"rgba(255,255,255,0.5)"}
          />
        </View>
      </View>
      <View style={PostDetailStyle.bottomView}>
        <RedButton redBtnText={strings.POST} />
      </View>
    </WrapperContainer>
  );
}
