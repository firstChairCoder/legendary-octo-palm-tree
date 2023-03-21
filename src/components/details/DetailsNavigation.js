import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { COLORS, icons, SHADOW, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: SIZES.padding,
    position: "absolute",
    top: SIZES.padding,
    width: "100%",
    zIndex: 1
  },
  arrow: {
    height: "60%",
    tintColor: COLORS.white,
    width: "60%"
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: COLORS.black,
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    width: 40,
    ...SHADOW.darkShadow
  },
  upload: {
    height: "50%",
    tintColor: COLORS.white,
    width: "50%"
  },
  iconsRight: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  heart: {
    height: "45%",
    tintColor: COLORS.white,
    width: "45%"
  }
});

const DetailsNavigation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.goBack()}
      >
        <Image source={icons.arrow} resizeMode="contain" style={styles.arrow} />
      </TouchableOpacity>

      <View style={styles.iconsRight}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            source={icons.upload}
            resizeMode="contain"
            style={styles.upload}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.imageContainer, { marginLeft: SIZES.base }]}
        >
          <Image
            source={icons.heart}
            resizeMode="contain"
            style={styles.heart}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsNavigation;
