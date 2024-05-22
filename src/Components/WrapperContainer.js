import { View } from "react-native";
import color from "../Constants/color";

export default function WrapperContainer({ children, wrapperStyle }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.mainBackgroundColor,
        padding: 24,
        ...wrapperStyle
      }}
    >
      {children}
    </View>
  );
}
//backgroundColor: "#2E2E2E",