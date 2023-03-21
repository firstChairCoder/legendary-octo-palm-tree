import { SafeAreaView, ScrollView, View } from "react-native";

import HomeHeader from "../../components/nature/HomeHeader";
import HomeProducts from "../../components/nature/HomeProducts";
import HomeCategories from "../../components/nature/HomeCatgories";
import { COLORS } from "../../constants";
import FocusedStatusBar from "../../utils/FocusedStatusBar";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.brownBG }}>
      <FocusedStatusBar
        backgroundColor={COLORS.brownBG}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <HomeHeader />
          <HomeProducts navigation={navigation} />
          <HomeCategories />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
