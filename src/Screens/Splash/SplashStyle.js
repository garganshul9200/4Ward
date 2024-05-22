import { StyleSheet } from "react-native";
import color from "../../Constants/color";

export const SplashStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.mainBackgroundColor,
  },
  img: {
    resizeMode: "contain",
  },
});
