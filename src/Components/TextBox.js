//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import color from '../Constants/color';

// create a component
const TextBox = ({Show, onPress,onChangeText,value, ...props }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInputBox}
                placeholderTextColor={'rgba(255,255,255,0.5)'}
                // placeholder={placeholder} //change on every screen and props will do the rest
                onChangeText={onChangeText}
                value={value}


                {...props}
            />
            {Show ? (<TouchableOpacity onPress={onPress}><Text style={{ color: 'rgba(255,255,255,0.5)' }}>{Show}
            </Text></TouchableOpacity>) : null}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 14,
        justifyContent: 'space-between',
        height: 48,
        borderRadius: 8,
        backgroundColor: color.matterHorn,
        fontSize: 14,

        alignItems: 'center'
    },

    textInputBox: {
        color: color.white,
        
    },


});

//make this component available to the app
export default TextBox;
