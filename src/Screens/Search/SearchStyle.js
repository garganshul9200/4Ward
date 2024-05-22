import { StyleSheet } from "react-native";
import color from "../../Constants/color";

export const SearchStyle = StyleSheet.create({
  textBoxView: {
    marginTop: 32,
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
