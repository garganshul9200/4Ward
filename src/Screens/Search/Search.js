import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TextBox from "../../Components/TextBox";
import AddressFlatlist from "../../Components/AddressFlatlist";
import { FlatlistData, FlatlistDataSearch } from "../../Constants/FlatlistData";
import { SearchStyle } from "../Search/SearchStyle";
import WrapperContainer from "../../Components/WrapperContainer";
import strings from "../../Constants/strings";

export default function Search() {
  return (
    <WrapperContainer>
      <View style={SearchStyle.textBoxView}>
        <TextBox placeholder={"Sector"} Show={"Enter location manually"} />
      </View>
      <View style={SearchStyle.suggestionsView}>
        <Text style={SearchStyle.suggestionsText}>{strings.Suggestions}</Text>
      </View>
      <View>
        <AddressFlatlist flatdata={FlatlistDataSearch} />
      </View>
    </WrapperContainer>
  );
}
