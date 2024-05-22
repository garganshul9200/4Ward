import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { Routes } from "./src/Navigation/Routes";
import { checkStatus } from "./src/redux/actions/loginAction";
import { getApi, postApi } from "./src/utils/utils";
import { useEffect } from "react";
import SelectLocation from "./src/Screens/SelectLocation/SelectLocation";

export default function App() {
  // useEffect(() => {
  //   let data = {
  //     username: "honey",
  //     password: "12345678",
  //     device_type: "android",
  //     device_token: "12345",
  //   };

    // getApi("https://dev.bonkersapp.com/api/get-static-data")
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

  //   postApi("https://dev.bonkersapp.com/api/login", {}, data)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // });

  // const asycget = async () => {
  //   const val = await AsyncStorage.getItem("userCreds");
  //   if (val) {
  //     checkStatus(true);
  //   }
  //   const val2 = await AsyncStorage.getItem("usermobile");
  //   // console.log(val, "abc");
  // };

  // asycget();

  return (
    <Provider store={store}>
      <Routes />
    </Provider>

    // <Splash />
    // <GetStarted />
    // <Login1_1 />
    // <SignUp />
    // <SignUp1_1 />
    // <SetPassword />
    // <Login />
    // <SelectLocation />
    // <Home />
    // <PostDetail />
    // <Search />
    // <Notification />
    // <EditProfile />
    // <Profile />
    // <ChangePassword />
  );
}
