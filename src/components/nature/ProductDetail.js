import { Image, Text, TouchableOpacity, View } from "react-native";

import { COLORS, icons, SIZES } from "../../constants";

const ProductDetail = ({ chair }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: COLORS.white,
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font,
        padding: SIZES.xMedium,
        marginTop: -SIZES.xPadding * 2.25
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: SIZES.xMedium
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: SIZES.xMedium + 3,
            lineHeight: 27.3,
            color: COLORS.darkClay,
            maxWidth: 150
          }}
        >
          {chair.name}
        </Text>
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
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: SIZES.base,
          borderWidth: 1,
          borderColor: COLORS.lightWhite,
          borderRadius: SIZES.base + 2,
          marginVertical: SIZES.base
        }}
      >
        {chair.properties.map((item) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: SIZES.base
            }}
            key={item.name}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{ width: 28, height: 28, tintColor: COLORS.primary }}
            />
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: SIZES.base,
                lineHeight: 16,
                color: COLORS.darkClay,
                marginTop: 2
              }}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </View>

      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: SIZES.base + 2,
            lineHeight: 18,
            color: COLORS.darkClay,
            opacity: 0.5,
            marginVertical: SIZES.font,
            paddingHorizontal: SIZES.base / 2
          }}
        >
          {chair.details}
        </Text>

        <TouchableOpacity
          activeOpacity={0.45}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: SIZES.font,
            borderRadius: SIZES.base + 2,
            backgroundColor: COLORS.green,
            marginTop: SIZES.font
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Light",
                fontSize: SIZES.font,
                lineHeight: 21,
                color: COLORS.white
              }}
            >
              Add to Cart
            </Text>
          </View>
          <Image
            source={icons.cart}
            resizeMode="contain"
            style={{
              width: 24,
              height: 24,
              tintColor: COLORS.white,
              marginLeft: SIZES.base
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
