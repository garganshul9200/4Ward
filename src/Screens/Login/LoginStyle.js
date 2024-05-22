import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import color from "../../Constants/color";

export const LoginStyle = StyleSheet.create({
  imageView: {
    marginTop: moderateVerticalScale(76),
    height: moderateScale(178),
    alignItems: "center",
  },

  topTextView: {
    marginTop: moderateVerticalScale(64),
  },

  redBtnView: {
    marginTop: moderateVerticalScale(35),
  },

  orView: {
    marginTop: moderateVerticalScale(26.5),
  },

  orText: {
    fontSize: 16,
    textAlign: "center",
    color: color.white,
  },

  whiteBtnView: {
    marginTop: moderateVerticalScale(26),
    gap: moderateScale(16),
  },

  newSignUpView: {
    marginTop: moderateVerticalScale(26),
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 14,
  },

  newHereText: {
    color: color.white,
    marginRight: 3,
  },

  signUpText: {
    color: color.soft_prince,
  },
});
