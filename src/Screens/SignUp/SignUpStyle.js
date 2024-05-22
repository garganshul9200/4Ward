import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";

export const SignUpStyle = StyleSheet.create({
    
    topView: {
        marginTop: 24,
        flex: 0.9,
    },

    nameView: {
        marginTop: 32,
        flexDirection: 'row',
        gap: 16
    },

    nameViewFlex: {
        flex: 0.5
    },

    emailMainView: {
        marginTop: moderateVerticalScale(16)
    },

    emailSubView: {
        width: moderateScale(328)
    },

    phnNumView: {
        marginTop: 16,
        gap: 16,
        flexDirection: 'row'
    },

    phnNumLeft: {
        flex: 0.3
    },

    phnNumRight: {
        flex: 0.7
    },

    bottomView: {
        flex: 0.1
    },


})