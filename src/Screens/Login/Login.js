import {
  View,
  Text,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ImagePath from "../../Constants/ImagePath";
import RedButton from "../../Components/RedButton";
import WhiteButton from "../../Components/WhiteBtn";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { LoginStyle } from "./LoginStyle";
import WrapperContainer from "../../Components/WrapperContainer";
import strings from "../../Constants/strings";

export default function Login({ navigation }) {
  return (
    <WrapperContainer>
      <View style={LoginStyle.imageView}>
        <Image source={ImagePath.Icon4ward} />
      </View>
      <View style={LoginStyle.topTextView}>
        <Text style={{ color: "#9C9C9C", fontSize: 13, textAlign: "center" }}>
          {strings.clickPrivacyPolicy}
        </Text>
      </View>
      <View style={LoginStyle.redBtnView}>
        <RedButton
          onPress={() => {
            navigation.navigate("Login1_1");
          }}
          redBtnText={"Log In with Phone number"}
        />
      </View>
      <View style={LoginStyle.orView}>
        <Text style={LoginStyle.orText}>{strings.or}</Text>
      </View>
      <View style={LoginStyle.whiteBtnView}>
        <WhiteButton
          whiteBtnText={strings.loginGoogle}
          whiteBtnImage={ImagePath.googleIcon}
        />
        <WhiteButton
          whiteBtnText={strings.loginFacebook}
          whiteBtnImage={ImagePath.facebookIcon}
        />
        <WhiteButton
          whiteBtnText={strings.loginApple}
          whiteBtnImage={ImagePath.appleIcon}
        />
      </View>
      <View style={LoginStyle.newSignUpView}>
        <View>
          <Text style={LoginStyle.newHereText}>{strings.New_here}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={LoginStyle.signUpText}>{strings.Sign_Up}</Text>
        </TouchableOpacity>
      </View>
    </WrapperContainer>

  );
}
