import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { COLORS, icons, images, SIZES } from "../../constants";

const HomeHeader = () => {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: SIZES.font
        }}
      >
        <TouchableOpacity>
          <Image
            source={icons.menu3}
            resizeMode="contain"
            style={{ width: 24, height: 24, tintColor: COLORS.clay }}
          />
        </TouchableOpacity>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{
            width: 70,
            height: 35,
            tintColor: COLORS.darkClay,
            marginHorizontal: SIZES.base
          }}
        />
        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20 }}>
          <Image
            source={images.enola}
            resizeMode="cover"
            style={{ width: "100%", height: "100%", borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: SIZES.base,
          borderRadius: SIZES.base + 2,
          borderWidth: 2,
          borderColor: COLORS.lightWhite,
          margin: SIZES.font
        }}
      >
        <TouchableOpacity>
          <Image
            source={icons.search2}
            resizeMode="contain"
            style={{ width: 24, height: 24, tintColor: COLORS.clay }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search for products"
          style={{
            flex: 1,
            color: COLORS.darkClay,
            paddingHorizontal: SIZES.base,
            fontFamily: "Poppins-Light",
            fontSize: SIZES.font,
            lineHeight: 21
          }}
          placeholderTextColor={COLORS.clay}
        />
        <TouchableOpacity>
          <Image
            source={icons.mic}
            resizeMode="contain"
            style={{ width: 24, height: 24, tintColor: COLORS.clay }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
