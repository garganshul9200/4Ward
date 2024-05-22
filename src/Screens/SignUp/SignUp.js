//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import ImagePath from "../../Constants/ImagePath";
import TextBox from "../../Components/TextBox";
import RedButton from "../../Components/RedButton";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import HeadText from "../../Components/HeadText";
import { SignUpStyle } from "./SignUpStyle";
import WrapperContainer from "../../Components/WrapperContainer";
import strings from "../../Constants/strings";

// create a component
const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  function addFirstName(val) {
    if (val.match("^[a-zA-Z ]*$")) setFirstName(val);
  }

  const [lastName, setLastName] = useState("");
  function addLastName(val) {
    if (val.match("^[a-zA-Z ]*$")) {
      setLastName(val);
    }
  }

  const [email, setEmail] = useState("");
  function addEmail(val) {
    setEmail(val);
  }

  const [mobile, setmobile] = useState("");
  function addMobile(val) {
    if (val.match("^[0-9]*$")) setmobile(val);
  }

  function nextBtn() {
    if (navigation.navigate("SignUp1_1")) {
      // if((mobile == '') || (firstName == "") || (lastName == "") || !email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
      alert("please enter all details correctly.");
    } else {
      navigation.navigate("SignUp1_1");
    }
  }

  // console.log(lastName)
  return (
    <WrapperContainer>
      <View style={SignUpStyle.topView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={ImagePath.backArrow} />
        </TouchableOpacity>
        <View>
          <HeadText
            mainText={strings.New_account}
            subText={strings.NewAccountContinue}
          />
          <View style={SignUpStyle.nameView}>
            <View style={SignUpStyle.nameViewFlex}>
              <TextBox
                placeholder={"First Name"}
                autoFocus={true}
                value={firstName}
                onChangeText={addFirstName}
              />
            </View>
            <View style={SignUpStyle.nameViewFlex}>
              <TextBox
                placeholder={"Last Name"}
                value={lastName}
                onChangeText={addLastName}
              />
            </View>
          </View>
          <View style={SignUpStyle.emailMainView}>
            <View style={SignUpStyle.emailSubView}>
              <TextBox
                keyboardType="email-address"
                placeholder={"Email"}
                value={email}
                onChangeText={addEmail}
              />
            </View>
          </View>

          <View style={SignUpStyle.phnNumView}>
            <View style={SignUpStyle.phnNumLeft}>
              <TextBox placeholder="+91" />
            </View>
            <View style={SignUpStyle.phnNumRight}>
              <TextBox
                keyboardType="number-pad"
                placeholder="Phone number"
                value={mobile}
                onChangeText={addMobile}
                maxLength={10}
              />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={SignUpStyle.bottomView}>
        <RedButton
          onPress={() => {
            nextBtn();
          }}
          redBtnText={strings.NEXT}
        />
      </TouchableOpacity>
    </WrapperContainer>
  );
};

//make this component available to the app
export default SignUp;
