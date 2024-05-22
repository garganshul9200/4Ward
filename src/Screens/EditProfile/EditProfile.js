import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import ImagePath from "../../Constants/ImagePath";
import TextBox from "../../Components/TextBox";
import RedButton from "../../Components/RedButton";
import { EditProfileStyle } from "./EditProfileStyle";
import strings from "../../Constants/strings";

export default function EditProfile({ navigation }) {
    return (
        <View style={EditProfileStyle.container}>
            <View style={EditProfileStyle.topView}>
                <TouchableOpacity onPress={() => {navigation.goBack()}} style={EditProfileStyle.addInfoView}>
                    <Image source={ImagePath.backArrow} style={EditProfileStyle.addInfoImg} />
                    <Text style={EditProfileStyle.addInfoText}>
                        {strings.Edit_Profile}
                    </Text>
                </TouchableOpacity>
                <View style={EditProfileStyle.profileImgView}>
                    <Image source={ImagePath.googleIcon} style={EditProfileStyle.profileImg} />
                </View>
                <View style={EditProfileStyle.nameView}>
                    <View style={EditProfileStyle.nameFlex}>
                        <TextBox placeholder={'First Name'} autoFocus={true} />
                    </View>
                    <View style={EditProfileStyle.nameFlex}>
                        <TextBox placeholder={'Last Name'} />
                    </View>
                </View>
                <View style={EditProfileStyle.emailView}>
                    <TextBox placeholder={'Email'} />
                </View>

                <View style={EditProfileStyle.phNoView}>
                    <View style={EditProfileStyle.phNoflexLeft}>
                        <TextBox placeholder={'+91'} />
                    </View>
                    <View style={EditProfileStyle.phNoflexRight}>
                        <TextBox placeholder={'7532410698'} />
                    </View>
                </View>
            </View>
            <View style={EditProfileStyle.redBtnView}>
                <RedButton redBtnText={strings.SAVE_CHANGES} />
            </View>

        </View >
    )
}