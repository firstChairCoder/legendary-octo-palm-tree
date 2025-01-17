import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View
} from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

import { images, SIZES } from "../../constants";
import FocusedStatusBar from "../../utils/FocusedStatusBar";
import DetailsNavigation from "../../components/details/DetailsNavigation";
import DetailsTitle from "../../components/details/DetailsTitle";
import RecipeDetails from "../../components/RecipeDetails";

const windowHeight = Dimensions.get("window").height;

const Recipe = ({ route, navigation }) => {
  const { item } = route.params;
  // const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <ImageBackground
        source={images.avocado}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
          // paddingBottom: insets.bottom
        }}
      >
        <DetailsNavigation navigation={navigation} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <View
            style={{
              flex: 1,
              height: windowHeight + SIZES.padding * 2
            }}
          >
            <DetailsTitle
              name={item.name}
              time={item.time}
              rating={item.rating}
              people={item.people}
            />
          </View>
          <View style={{ maxHeight: 450 }}>
            <RecipeDetails steps={item.steps} preparation={item.preparation} />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Recipe;
