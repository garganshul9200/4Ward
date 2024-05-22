import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../Screens/GetStarted/GetStarted";
import Login from "../Screens/Login/Login";
import Login1_1 from "../Screens/Login1_1/Login1_1";
import SignUp from "../Screens/SignUp/SignUp";
import SignUp1_1 from "../Screens/SignUp1_1/SignUp1_1";
import SetPassword from "../Screens/SetPassword/SetPassword";
import SelectLocation from "../Screens/SelectLocation/SelectLocation";
import NavigationString from "../Constants/navigationString";
const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <>
      <Stack.Screen name={NavigationString.GetStarted} component={GetStarted} />
      <Stack.Screen name={NavigationString.Login} component={Login} />
      <Stack.Screen name={NavigationString.Login1_1} component={Login1_1} />
      <Stack.Screen name={NavigationString.SignUp} component={SignUp} />
      <Stack.Screen name={NavigationString.SignUp1_1} component={SignUp1_1} />
      <Stack.Screen name={NavigationString.SetPassword} component={SetPassword} />
      <Stack.Screen name={NavigationString.SelectLocation} component={SelectLocation} />
    </>
  );
}
