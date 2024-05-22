import React from "react"
import { View, Text, Image, FlatList, StyleSheet, } from "react-native";
import color from "../Constants/color";



const NotificationList = ({item = {}}) => {
    return (
        <View style={styles.container}>
        <Image source={item.userImg} style={styles.userImg} />
        <View style={{width:'100%'}}>
            <View style={styles.textView}>
                <View>
                    <Text style={styles.topText}>{item.uName} </Text>
                </View>
                <View>
                    <Text style={styles.bottomText}>{item.nameText}</Text>
                </View>
            </View>
            <View style={styles.timeView}>
                <Text style={styles.timeText}>{item.timeText}</Text>
            </View>
        </View>
    </View>

    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flexDirection: 'row',
        alignContent: 'center',
    },

    userImg: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    },

    textView: {
        marginLeft: 16,
        flexDirection: 'row'
    },

    topText: {
        color: color.red,
        fontSize: 16
    },

    bottomText: {
        color: color.white,
        fontSize: 16
    },

    timeView: {
        marginLeft: 16,
        borderBottomColor: color.ford_gray,
        paddingBottom: 20,
        borderBottomWidth: 1,
        width:'100%'
    },

    timeText: {
        color: color.pink_swan
    },

    bottomLine: {
        borderBottomColor: color.ford_gray,
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 55
    },

})

export default NotificationList;