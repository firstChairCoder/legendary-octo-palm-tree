import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";

import { COLORS, icons } from "../constants";
import JuicyHome from "../screens/Juicy/Home";
import JuicyShop from "../screens/Juicy/Shop";

const Tab = createBottomTabNavigator();
function JuicyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          height: 70
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.secondary : COLORS.white;

          switch (route.name) {
            case "JuicyHome":
              return (
                <Image
                  source={icons.menu2}
                  resizeMode="contain"
                  style={{ width: 20, height: 20, tintColor }}
                />
              );

            case "JuicyShop":
              return (
                <Image
                  source={icons.cart}
                  resizeMode="contain"
                  style={{ width: 24, height: 24, tintColor }}
                />
              );

            case "JuicySearch":
              return (
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: COLORS.secondary,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{
                      width: "50%",
                      height: "50%",
                      tintColor: COLORS.white
                    }}
                  />
                </View>
              );

            default:
              return null;
          }
        }
      })}
      initialRouteName="JuicyHome"
    >
      <Tab.Screen name="JuicyHome" component={JuicyHome} />
      <Tab.Screen name="JuicyShop" component={JuicyShop} />
      <Tab.Screen name="JuicySearch" component={JuicyHome} />
    </Tab.Navigator>
  );
}

export default JuicyTabs;
