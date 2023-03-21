import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import ShoeCard from "../../components/ShoeCard";
import { COLORS, icons, images, SIZES } from "../../constants";
import { bestProducts, products } from "../../constants/dummy";
import FocusedStatusBar from "../../utils/FocusedStatusBar";

const filters = ["Sneakers", "Running", "Training", "Basketball"];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkGray }}>
      <FocusedStatusBar backgroundColor={COLORS.darkGray} />

      <ScrollView>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          {/* Home Header Start */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <TouchableOpacity>
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{ width: 18, height: 18 }}
              />
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity style={{ marginRight: SIZES.medium }}>
                <Image
                  source={icons.bag}
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={images.user}
                  resizeMode="contain"
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Home Header End */}

          {/* Home Filter Start */}
          <View style={{ marginVertical: SIZES.xxlarge }}>
            <FlatList
              data={filters}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{
                    paddingVertical: SIZES.base,
                    paddingHorizontal: SIZES.large,
                    borderRadius: SIZES.base / 2,
                    backgroundColor:
                      activeFilter === item ? COLORS.red : COLORS.darkGray,
                    marginRight: index !== filters.length - 1 ? SIZES.medium : 0
                  }}
                  onPress={() => setActiveFilter(item)}
                >
                  <Text
                    style={{
                      fontFamily: "BebasNeue",
                      textTransform: "uppercase",
                      fontSize: SIZES.medium,
                      color:
                        activeFilter === item ? COLORS.black2 : COLORS.white
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          {/* Home Filter End */}

          {/* Shoe cards Start */}
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ShoeCard
                item={item}
                cardRight={SIZES.xxlarge * 2}
                cardMaxWidth={237}
                cardRadius={36}
                companyFontSize={30}
                nameFontSize={43}
                priceFontSize={30}
                imageTop={-70}
                imageWidth={288}
                imageHeight={192}
                imageLeft={-30}
                cartDimension={60}
              />
            )}
            contentContainerStyle={{ op: SIZES.small / 2 }}
          />
          {/* Shoe cards End */}

          {/* Best Shoes Start */}
          <View style={{ op: SIZES.xxlarge * 1.25 }}>
            <Text
              style={{
                fontFamily: "BebasNeue",
                fontSize: 35,
                color: COLORS.white
              }}
            >
              Best for you
            </Text>
            <FlatList
              data={bestProducts}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ShoeCard
                  item={item}
                  cardRight={SIZES.xxlarge * 2}
                  cardMaxWidth={196}
                  cardRadius={27}
                  companyFontSize={23}
                  nameFontSize={36}
                  priceFontSize={23}
                  imageTop={-50}
                  imageWidth={211}
                  imageHeight={129}
                  imageLeft={-5}
                  cartDimension={40}
                />
              )}
              contentContainerStyle={{ op: SIZES.medium }}
            />
          </View>
          {/* Best Shoes End */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
