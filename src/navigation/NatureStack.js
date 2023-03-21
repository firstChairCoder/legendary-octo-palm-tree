import { createStackNavigator } from "@react-navigation/stack";

import NatureHome from "../screens/Nature/Home";
import NatureProduct from "../screens/Nature/Product";

const NaturStack = createStackNavigator();
export default function NatureStack() {
  return (
    <NaturStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="NatureHome"
    >
      <NaturStack.Screen name="NatureHome" component={NatureHome} />
      <NaturStack.Screen name="NatureProduct" component={NatureProduct} />
    </NaturStack.Navigator>
  );
}
