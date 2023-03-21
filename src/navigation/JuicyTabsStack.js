import { createStackNavigator } from "@react-navigation/stack";

import JuicyTabs from "./JuicyTabs";

const JuicyStack = createStackNavigator();
export default function JuicyTabsStack() {
  return (
    <JuicyStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Tabs"
    >
      <JuicyStack.Screen name="Tabs" component={JuicyTabs} />
    </JuicyStack.Navigator>
  );
}
