import { StyleSheet } from "react-native";
import color from "../../Constants/color";

export const SignUp1_1Style = StyleSheet.create({
  topView: {
    marginTop: 32,
    flex: 0.8,
  },

  editNumText: {
    fontSize: 15,
    color: color.dodger_blue,
  },

  textBoxView: {
    marginTop: 32,
    flexDirection: "row",
    width: 40,
    gap: 16,
  },

  bottomView: {
    flex: 0.1,
  },

  resendText: {
    fontSize: 15,
    color: color.white,
  },

  redBtnView: {
    paddingTop: 33,
  },
});
