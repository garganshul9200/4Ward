import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTab } from "./BottomTab";
import EditProfile from "../Screens/EditProfile/EditProfile";
import ChangePassword from "../Screens/ChangePassword/ChangePassword";
import Home from "../Screens/Home/Home";
import NavigationString from "../Constants/navigationString";

const Stack = createNativeStackNavigator();
export function MainStack() {
  return (
    <>
      {/* <Stack.Screen name={NavigationString.Home} component={Home} /> */}
      <Stack.Screen name={NavigationString.BottomTab} component={BottomTab} />
      <Stack.Screen name={NavigationString.EditProfile} component={EditProfile} />
      <Stack.Screen name={NavigationString.ChangePassword} component={ChangePassword} />
    </>
  );
}
