import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ImagePath from '../../Constants/ImagePath';
import TextBox from '../../Components/TextBox';
import RedButton from '../../Components/RedButton';
import { ChangePasswordStyle } from './ChangePasswordStyle';
import strings from '../../Constants/strings';

export default function SetPassword({navigation}) {
    return (
        <View style={ChangePasswordStyle.container}>
            <View style={ChangePasswordStyle.upperView}>
                <View style={ChangePasswordStyle.changePassView}>
                    <TouchableOpacity onPress={() => {navigation.goBack()}}>
                        <Image source={ImagePath.backArrow} />
                    </TouchableOpacity>
                    <View style={ChangePasswordStyle.changePassTextView}>
                        <Text style={ChangePasswordStyle.changePassText}>{strings.Change_Password}</Text>
                    </View>
                </View>
                <View style={ChangePasswordStyle.passView}>
                    <TextBox placeholder={'Password'} Show={'Show'} />
                </View>
                <View style={ChangePasswordStyle.confirmPassView}>
                    <TextBox placeholder={'Confirm Password'} Show={'Show'} />
                </View>
            </View>
            <View style={ChangePasswordStyle.lowerView}>
                <RedButton redBtnText={strings.SAVE} />
            </View>
        </View>
    )
}
