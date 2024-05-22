import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainStack } from "./MainStack";
import { AuthStack } from "./AuthStack";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();
export const Routes = () => {
  const val = useSelector((state) => state.status);
  console.log(val, "check");

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {val ? MainStack() : AuthStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//initialRouteName="EditProfile"
