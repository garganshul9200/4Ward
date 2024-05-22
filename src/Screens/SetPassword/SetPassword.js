import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ImagePath from "../../Constants/ImagePath";
import HeadText from "../../Components/HeadText";
import TextBox from "../../Components/TextBox";
import RedButton from "../../Components/RedButton";
import { setPassStyle } from "./setPassStyle";
import WrapperContainer from "../../Components/WrapperContainer";
import strings from "../../Constants/strings";


export default function SetPassword({ navigation }) {
  const [state, setState] = useState(true);
  const [showHide, setShowHide] = useState("Show");

  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function getStartedBtn() {
    if (pass == "" || confirmPass == "" || pass != confirmPass) {
      console.log(pass);
      console.log("check", confirmPass);
      alert("Password fields either empty or not matching");
    } else {
      navigation.navigate("SelectLocation");
    }
  }

  return (
    <WrapperContainer>
      <View style={setPassStyle.topView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImagePath.backArrow} />
        </TouchableOpacity>
        <View>
          <HeadText
            mainText={strings.SetPass}
            subText={strings.create_unique_pass}
          />
        </View>
        <View style={setPassStyle.passView}>
          <TextBox
            placeholder={"Password"}
            secureTextEntry={state}
            Show={showHide}
            onPress={() => {
              state
                ? (setState(false), setShowHide("Hide"))
                : (setState(true), setShowHide("Show"));
            }}
            onChangeText={(val) => {
              setPass(val);
            }}
          />
        </View>
        <View style={setPassStyle.confirmPassView}>
          <TextBox
            placeholder={"Confirm Password"}
            secureTextEntry
            onChangeText={(val) => {
              setConfirmPass(val);
            }}
            Show={"Show"}
          />
        </View>
      </View>
      <View style={setPassStyle.bottomView}>
        <RedButton
          onPress={() => {
            getStartedBtn();
          }}
          redBtnText={strings.GET_STARTED}
        />
      </View>
    </WrapperContainer>
  );
}
