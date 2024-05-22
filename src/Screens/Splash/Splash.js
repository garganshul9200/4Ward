//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImagePath from '../../Constants/ImagePath';
import { SplashStyle } from './SplashStyle';

// create a component
const Splash = () => {
    return (
        <View style={SplashStyle.container}>
            <Image source={ImagePath.Icon4ward}
                style={SplashStyle.img}
            />
        </View>
    );
};

//make this component available to the app
export default Splash;
