import { StyleSheet } from "react-native";
import color from "../../Constants/color";

export const EditProfileStyle = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: color.mainBackgroundColor,
    },

    topView: {
        flex: 0.9
    },

    addInfoView: {
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center'
    },

    addInfoImg: {
        marginRight: 16,
        width: 24
    },

    addInfoText: {
        color: color.white,
        fontSize: 16,
    },

    profileImgView: {
        marginTop: 48.5,
        alignItems: 'center'
    },

    profileImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },

    nameView: {
        marginTop: 52,
        flexDirection: 'row',
        gap: 16
    },

    nameFlex: {
        flex: 0.5
    },

    emailView: {
        marginTop: 16
    },

    phNoView: {
        marginTop: 16,
        flexDirection: 'row',
        gap: 16
    },

    phNoflexLeft: {
        flex: 0.4
    },

    phNoflexRight: {
        flex: 0.6
    },

    redBtnView: {
        flex: 0.1,
        justifyContent: 'flex-end'
    },

})