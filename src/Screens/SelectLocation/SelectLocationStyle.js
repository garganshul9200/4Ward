import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import color from "../../Constants/color";

export const selectLocationStyle = StyleSheet.create({
  topView: {
    flex: 0.9,
  },

  mainTextView: {
    marginTop: moderateScale(32),
    flexDirection: "row",
    justifyContent: "space-between",
  },

  locationOffText: {
    fontSize: 24,
    color: color.white,
  },

  turnOnBtnView: {
    borderRadius: 8,
    backgroundColor: color.darkred,
    padding: 8,
  },

  turnOnText: {
    fontSize: 12,
    color: color.white,
  },

  subTextView: {
    marginTop: 16.5,
    width: moderateScale(248),
  },

  orView: {
    marginTop: 16,
  },

  orText: {
    fontSize: 16,
    color: color.white,
    textAlign: "center",
  },

  textBoxView: {
    marginTop: 26,
  },

  suggestionsView: {
    marginTop: 20.5,
  },

  suggestionsText: {
    fontSize: 15,
    color: color.white,
  },

  bottomView: {
    flex: 0.1,
    justifyContent: "flex-end",
  },
});
