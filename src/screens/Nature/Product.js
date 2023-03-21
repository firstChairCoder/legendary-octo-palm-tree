import { SafeAreaView, ScrollView, View } from "react-native";

import { COLORS } from "../../constants";
import FocusedStatusBar from "../../utils/FocusedStatusBar";
import ProductHeader from "../../components/nature/ProductHeader";
import ProductDetail from "../../components/nature/ProductDetail";

const Product = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.brownBG }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <ProductHeader img={product.img} navigation={navigation} />
          <ProductDetail chair={product} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;
