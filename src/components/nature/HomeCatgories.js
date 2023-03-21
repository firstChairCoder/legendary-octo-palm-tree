import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { COLORS, SIZES } from "../../constants";
import { categories } from "../../constants/dummy";

function FurnitureCategory({
  index,
  category,
  activeCategory,
  setActiveCategory
}) {
  return (
    <View
      style={{
        marginRight: index === categories.length - 1 ? 0 : SIZES.base,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TouchableOpacity
        style={[
          {
            width: 70,
            height: 70,
            borderRadius: SIZES.base + 2,
            borderWidth: 1,
            borderColor:
              activeCategory === category.name
                ? COLORS.clay
                : COLORS.lightWhite,
            backgroundColor:
              activeCategory === category.name
                ? COLORS.clay
                : COLORS.lightWhite,
            justifyContent: "center",
            alignItems: "center"
          },
          activeCategory === category.name && {
            shadowColor: COLORS.darkClay,
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5
          }
        ]}
        onPress={setActiveCategory}
      >
        <Image
          source={category.icon}
          resizeMode="contain"
          style={{
            width: "50%",
            height: "50%",
            tintColor:
              activeCategory === category.name ? COLORS.white : COLORS.clay
          }}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "Poppins-Light",
          fontSize: SIZES.base,
          lineHeight: 21,
          color: COLORS.darkClay,
          marginTop: SIZES.base
        }}
      >
        {category.name}
      </Text>
    </View>
  );
}

const HomeCategories = () => {
  const [activeCategory, setActiveCategory] = useState("Chairs");

  return (
    <View style={{ width: "100%" }}>
      <Text
        style={{
          fontFamily: "Poppins-Medium",
          fontSize: SIZES.xMedium,
          lineHeight: 27,
          color: COLORS.darkClay,
          marginHorizontal: SIZES.xPadding,
          marginVertical: SIZES.base / 2
        }}
      >
        Categories
      </Text>
      <View
        style={{
          marginHorizontal: SIZES.xPadding,
          marginVertical: SIZES.base
        }}
      >
        <FlatList
          data={categories}
          renderItem={({ item, index }) => (
            <FurnitureCategory
              index={index}
              category={item}
              activeCategory={activeCategory}
              setActiveCategory={() => setActiveCategory(item.name)}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeCategories;
