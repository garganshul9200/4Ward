//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImagePath from '../Constants/ImagePath';
import color from '../Constants/color';

// create a component
const WhiteButton = ({ whiteBtnText, whiteBtnImage}) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={{ padding: 16 }}>
                    
                     <Image source={whiteBtnImage} />
                </View>
                <View>
                    <Text style={{
                        textAlign: 'center',
                        color: color.darkestBlue,
                        fontSize: 14
                    }}>
                        {whiteBtnText}
                    </Text>
                </View>
                <View style={{ width: 40, }}></View>
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 48,
        backgroundColor: color.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        flexDirection: 'row'

    },
});

//make this component available to the app
export default WhiteButton;
