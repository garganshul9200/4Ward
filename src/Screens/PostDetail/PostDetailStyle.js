import { StyleSheet } from "react-native";
import color from "../../Constants/color";

export const PostDetailStyle = StyleSheet.create({
  topView: {
    flex: 0.9,
  },

  addImgView: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },

  addImageImg: {
    marginRight: 16,
    width: 24,
  },

  addImageText: {
    color: color.white,
    fontSize: 16,
  },

  plusView: {
    marginTop: 16,
    backgroundColor: color.matterHorn,
    width: 64,
    borderRadius: 8,
  },

  plusText: {
    fontSize: 40,
    padding: 20,
  },

  descriptionView: {
    marginTop: 16,
    backgroundColor: color.matterHorn,
    height: 96,
    borderRadius: 8,
    paddingTop: 8,
    paddingLeft: 16,
  },

  locationView: {
    marginTop: 16,
    backgroundColor: color.matterHorn,
    height: 48,
    borderRadius: 8,
    paddingVertical: 15,
    paddingLeft: 16,
  },

  bottomView: {
    flex: 0.1,
    justifyContent: "flex-end",
  },
});
