import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black
} from "@expo-google-fonts/roboto";

import Shoes from "./src/screens/Shoes";
import JuicyTabsStack from "./src/navigation/JuicyTabsStack";
import AvocadoStack from "./src/navigation/AvocadoStack";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
};

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    BebasNeue: require("./assets/fonts/BebasNeue-Regular.ttf"),
    "Roboto-Light": Roboto_300Light,
    "Roboto-Regular": Roboto_400Regular,
    "Roboto-Italic": Roboto_400Regular_Italic,
    "Roboto-Medium": Roboto_500Medium,
    "Roboto-Bold": Roboto_700Bold,
    "Roboto-Black": Roboto_900Black
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Avocado" component={AvocadoStack} />
        <Stack.Screen name="ShoesHome" component={Shoes} />
        <Stack.Screen name="Juicy" component={JuicyTabsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
