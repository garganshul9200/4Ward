import React from "react";
import { View, Image, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import ImagePath from "../Constants/ImagePath";
import color from "../Constants/color";

const ProfileComp = ({ addText, imgPath, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <Image source={imgPath} />
            <Text style={styles.addText}>
                {addText}
            </Text>
        </TouchableOpacity >
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        flexDirection: 'row',
        alignContent: 'center'
    },

    addText: {
        marginLeft: 20,
        fontSize: 15,
        color: color.white
    },

})

export default ProfileComp;