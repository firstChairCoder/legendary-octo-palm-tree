import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { COLORS, data, icons, images, SIZES } from "../../constants";
import FocusedStatusBar from "../../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkBlue }}>
      <FocusedStatusBar
        backgroundColor={COLORS.darkBlue}
        barStyle="light-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.medium,
              marginBottom: SIZES.small,
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: SIZES.medium * 1.5,
                fontFamily: "Roboto-Black",
                color: COLORS.white
              }}
            >
              Juicy
            </Text>

            <>
              <Image
                source={images.enola}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10
                }}
              />
            </>
          </View>

          <FlatList
            data={data.fruits}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  margin: SIZES.small / 2
                }}
              >
                <View
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: item.borderColor
                  }}
                >
                  <View
                    style={{
                      width: "90%",
                      height: "90%",
                      borderRadius: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: item.bgColor
                    }}
                  >
                    <Image
                      source={item.icon}
                      style={{ width: "50%", height: "50%" }}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    marginTop: SIZES.small / 2,
                    fontSize: SIZES.small + 2,
                    fontFamily: "Roboto-Italic",
                    color: COLORS.white
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              marginVertical: SIZES.medium
            }}
          />

          <View style={{ marginVertical: SIZES.medium }}>
            <Text
              style={{
                fontSize: SIZES.large,
                color: COLORS.white,
                textTransform: "capitalize",
                fontFamily: "Roboto-Medium"
              }}
            >
              Most Popular
            </Text>

            <FlatList
              data={data.juices}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    width: 250,
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    marginHorizontal: SIZES.small,
                    borderRadius: SIZES.large,
                    shadowColor: item.bgColor,
                    shadowOffset: {
                      width: 0,
                      height: 2
                    },
                    shadowOpacity: 0.85,
                    shadowRadius: 3.84,
                    elevation: 5,
                    overflow: "hidden"
                  }}
                >
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 250,
                      height: 250
                    }}
                    imageStyle={{ borderRadius: SIZES.large }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: SIZES.medium,
                      backgroundColor: item.bgColor
                    }}
                  >
                    <View style={{ flex: 1, marginRight: SIZES.small }}>
                      <Text
                        style={{
                          fontSize: SIZES.xlarge,
                          fontFamily: "Roboto-Italic",
                          color: COLORS.white
                        }}
                      >
                        {item.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "flex-start"
                        }}
                      >
                        <Text
                          style={{
                            fontSize: SIZES.large,
                            fontFamily: "Roboto-Medium",
                            color: COLORS.white,
                            marginRight: 5,
                            marginTop: 5
                          }}
                        >
                          $
                        </Text>
                        <Text
                          style={{
                            fontSize: SIZES.xlarge * 1.5,
                            fontFamily: "Roboto-Bold",
                            color: COLORS.white
                          }}
                        >
                          {item.price}
                        </Text>
                      </View>
                    </View>
                    <Image
                      source={icons.cart}
                      resizeMode="contain"
                      style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.white
                      }}
                    />
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{
                paddingVertical: SIZES.xlarge
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
