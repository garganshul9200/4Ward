//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import color from '../Constants/color';

// create a component
const RedButton = ({ redBtnText,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={{
                    textAlign: 'center',
                    color: color.white,
                    fontSize: 14
                }}>
                    {redBtnText}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 48,
        backgroundColor: color.darkred,
        justifyContent: 'center',
        borderRadius: 8,
    },
});

//make this component available to the app
export default RedButton;
