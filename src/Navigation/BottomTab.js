import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Screens/Home/Home';
import Search from '../Screens/Search/Search';
import Notification from '../Screens/Notification/Notification';
import Profile from '../Screens/Profile/Profile';
import PostDetail from '../Screens/PostDetail/PostDetail';
import { Image } from "react-native";
import ImagePath from "../Constants/ImagePath";

const Tab = createBottomTabNavigator();

export function BottomTab() {
    // <NavigationContainer>
    return (
        console.log('Bottomtab.js'),
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarStyle: { height: 60, backgroundColor: '#4C4C4C', borderTopLeftRadius: 8, borderTopLeftRadius: 8, position: 'absolute' }, tabBarShowLabel: false }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: () => {
                    return (
                        <Image source={ImagePath.homeIcon} />
                    )
                }
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: () => {
                    return (
                        <Image source={ImagePath.searchIcon} />
                    )
                }
            }} />
            <Tab.Screen name="PostDetail" component={PostDetail} options={{
                tabBarIcon: () => {
                    return (
                        <Image source={ImagePath.addIcon} />
                    )
                },
                tabBarStyle: {display:"none"}
            }} />
            <Tab.Screen name="Notification" component={Notification} options={{
                tabBarIcon: () => {
                    return (
                        <Image source={ImagePath.notificationIcon} />
                    )
                }
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: () => {
                    return (
                        <Image source={ImagePath.userIcon} />
                    )
                }
            }} />
        </Tab.Navigator>
    ) 
        {/* </NavigationContainer> */}
}