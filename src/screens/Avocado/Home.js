import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import RecipeCard from "../../components/RecipeCard";
import { COLORS, data, icons, SIZES } from "../../constants";
import FocusedStatusBar from "../../utils/FocusedStatusBar";

const styles = StyleSheet.create({
  container: { backgroundColor: COLORS.white, flex: 1 },
  search: {
    height: 20,
    tintColor: COLORS.black,
    width: 20
  },
  filter: {
    height: 15,
    tintColor: COLORS.black,
    width: 15
  },
  breakfastBar: {
    color: COLORS.primary,
    fontSize: SIZES.padding * 1.25,
    fontWeight: "bold",
    letterSpacing: 0.4
  }
});

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: SIZES.font }}>
          <View style={styles.searchContainer}>
            <TouchableOpacity>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={styles.search}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={icons.filter}
                resizeMode="contain"
                style={styles.filter}
              />
            </TouchableOpacity>
          </View>

          <View style={{ op: SIZES.base / 2 }}>
            <Text
              style={{
                fontSize: SIZES.padding * 1.25,
                color: COLORS.primary,
                fontWeight: "bold",
                letterSpacing: 0.4
              }}
            >
              Your everyday
            </Text>
            <Text
              style={{
                fontSize: SIZES.padding * 1.25,
                color: COLORS.primary,
                fontWeight: "bold",
                letterSpacing: 0.4
              }}
            >
              Avocado recipe
            </Text>
          </View>

          <View style={{ marginVertical: SIZES.font }}>
            <FlatList
              data={data.recipes}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <RecipeCard item={item} index={index} navigation={navigation} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{ marginVertical: SIZES.base }}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: SIZES.font
              }}
            >
              <Text style={styles.breakfastBar}>Breakfast</Text>
              <TouchableOpacity>
                <Text style={{ fontSize: SIZES.font, color: COLORS.tertiary }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={data.breakfast}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                // Breakfast Item
                <TouchableOpacity
                  style={{
                    width: 120,
                    marginRight:
                      index !== data.breakfast.length - 1 ? SIZES.padding : 0
                  }}
                >
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      height: 120
                    }}
                  />

                  <Text
                    style={{
                      fontSize: SIZES.font * 1.25,
                      fontWeight: "700",
                      color: COLORS.primary,
                      padding: SIZES.base / 2
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
