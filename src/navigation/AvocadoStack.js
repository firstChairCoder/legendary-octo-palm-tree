import { createStackNavigator } from "@react-navigation/stack";

import Recipe from "../screens/Avocado/Recipe";
import Home from "../screens/Avocado/Home";

const AvoStack = createStackNavigator();
export default function AvocadoStack() {
  return (
    <AvoStack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Home"
    >
      <AvoStack.Screen name="Home" component={Home} />
      <AvoStack.Screen name="Recipe" component={Recipe} />
    </AvoStack.Navigator>
  );
}
