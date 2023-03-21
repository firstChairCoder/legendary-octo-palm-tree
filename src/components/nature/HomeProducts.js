import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { COLORS, icons, SIZES } from "../../constants";
import { chairs } from "../../constants/dummy";

const ProductCard = ({ index, chair, activeProduct, navigation }) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const heightInc = useRef(new Animated.Value(276)).current;

  useEffect(() => {
    if (activeProduct === index) {
      Animated.timing(heightInc, {
        toValue: 306,
        easing: Easing.linear,
        duration: 250,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(heightInc, {
        toValue: 276,
        easing: Easing.linear,
        duration: 250,
        useNativeDriver: false
      }).start();
    }
  }, [activeProduct]);

  return (
    <View
      style={{
        minWidth: 217,
        minHeight: 370,
        marginRight: index === chairs.length - 1 ? 0 : SIZES.big,
        justifyContent: "center",
        marginTop: -SIZES.base,
        marginBottom: SIZES.font
      }}
    >
      <AnimatedTouchable
        activeOpacity={0.75}
        style={{ height: heightInc }}
        onPress={() => navigation.navigate("NatureProduct", { product: chair })}
      >
        <ImageBackground
          source={chair.img}
          resizeMode="cover"
          style={{
            width: 210,
            height: "100%"
          }}
          imageStyle={{ borderRadius: SIZES.base }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.base
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: SIZES.xMedium,
                  lineHeight: 27,
                  color: COLORS.darkClay
                }}
              >
                {chair.price}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: SIZES.base + 2,
                  lineHeight: 18,
                  color: COLORS.darkClay
                }}
              >
                {chair.name}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 60,
                height: 60,
                borderRadius: SIZES.base + 2,
                backgroundColor: COLORS.green,
                justifyContent: "center",
                alignItems: "center",
                top: SIZES.xlarge * 1.25,
                shadowColor: COLORS.darkClay,
                shadowOffset: {
                  width: 0,
                  height: 5
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10
              }}
            >
              <Image
                source={icons.cart}
                resizeMode="contain"
                style={{ width: 24, height: 24, tintColor: COLORS.white }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </AnimatedTouchable>
    </View>
  );
};

const ActiveSection = ({ title, activeSection, handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: SIZES.base,
        justifyContent: "center",
        alignItems: "center"
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: SIZES.font,
          lineHeight: 21,
          fontFamily:
            activeSection === title ? "Poppins-Bold" : "Poppins-Light",
          color: COLORS.darkClay,
          textTransform: "capitalize"
        }}
      >
        {title}
      </Text>
      <View
        style={{
          width: 4,
          height: 4,
          borderRadius: 2,
          backgroundColor:
            activeSection === title ? COLORS.darkClay : COLORS.brownBG
        }}
      />
    </TouchableOpacity>
  );
};

function HomeProducts({ navigation }) {
  const [activeSection, setActiveSection] = useState("new");
  const [activeProduct, setActiveProduct] = useState(0);

  const handleViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveProduct(viewableItems[0].index);
    }
  };

  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          padding: SIZES.font,
          paddingBottom: 2,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        {["new", "popular", "sale"].map((section) => (
          <ActiveSection
            key={section}
            activeSection={activeSection}
            title={section}
            handlePress={() => setActiveSection(section)}
          />
        ))}
      </View>

      <View style={{ marginHorizontal: SIZES.big }}>
        <FlatList
          data={chairs}
          renderItem={({ item, index }) => (
            <ProductCard
              index={index}
              chair={item}
              activeProduct={activeProduct}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          // onViewableItemsChanged={handleViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 70
          }}
        />
      </View>
    </View>
  );
}

export default HomeProducts;
