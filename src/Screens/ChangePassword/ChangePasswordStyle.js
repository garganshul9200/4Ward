import { StyleSheet } from "react-native";
import color from "../../Constants/color";

export const ChangePasswordStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.mainBackgroundColor,
        padding: 24,
    },
    upperView: {
        flex: 0.9,
        marginTop: 32
    },

    changePassView: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    changePassTextView: {
        paddingLeft: 16
    },

    changePassText: {
        fontSize: 16,
        color: color.white
    },

    passView: {
        marginTop: 32
    },

    confirmPassView: {
        marginTop: 16
    },

    lowerView: {
        flex: 0.1,
        justifyContent: 'flex-end'
    }
})