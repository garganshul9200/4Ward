import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";

export const HomeStyle = StyleSheet.create({

    iconView: {
        marginTop: moderateVerticalScale(22),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconImg: {
        height: moderateVerticalScale(54),
        resizeMode: 'contain'
    },


})