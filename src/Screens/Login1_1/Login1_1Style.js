import { StyleSheet } from "react-native";
import color from "../../Constants/color";

export const Login1_1Style = StyleSheet.create({
   

    backArrow: {
        marginTop: 22,
        width: 24,
        height: 24,
    },

    upperView: {
        flex: 0.9,
        marginTop: 32
    },

    mobileNumView: {
        flexDirection: 'row',
        gap: 16
    },

    mobileViewLeft: {
        flex: 0.4
    },

    mobileNumRight: {
        flex: 0.6
    },

    mainPassView: {
        marginTop: 16,
        flexDirection: 'row',
        gap: 16
    },

    subPassView: {
        flex: 1
    },

    otpView: {
        marginTop: 26,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    useOtpText: {
        color: color.white,
        fontSize: 13
    },

    forgotPassText: {
        color: color.dodger_blue,
        fontSize: 13
    },

    lowerView: { 
        flex: 0.1 
    }

})