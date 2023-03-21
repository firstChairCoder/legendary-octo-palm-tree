import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { COLORS, data, icons, SIZES } from "../../constants";
import FocusedStatusBar from "../../utils/FocusedStatusBar";

const Shop = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.slate }}>
      <FocusedStatusBar
        backgroundColor={COLORS.slate}
        barStyle="light-content"
      />

      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: SIZES.medium
          }}
        >
          <TouchableOpacity>
            <Image
              source={icons.arrow2}
              resizeMode="cover"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white
              }}
            />
          </TouchableOpacity>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                fontSize: SIZES.large,
                color: COLORS.white,
                textTransform: "uppercase",
                fontFamily: "Roboto-Bold"
              }}
            >
              My Cart
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            borderTopLeftRadius: SIZES.xlarge,
            borderTopRightRadius: SIZES.xlarge,
            paddingTop: SIZES.large,
            paddingHorizontal: SIZES.medium
          }}
        >
          <FlatList
            data={data.juices}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginVertical: SIZES.small
                }}
              >
                <Image
                  source={item.img}
                  resizeMode="cover"
                  style={{
                    width: 140,
                    height: 170,
                    borderRadius: SIZES.large
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: SIZES.medium,
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                  }}
                >
                  <Text
                    style={{
                      fontSize: SIZES.large,
                      fontFamily: "Roboto-Bold",
                      color: COLORS.white
                    }}
                  >
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      fontSize: SIZES.small,
                      fontFamily: "Roboto-Italic",
                      color: COLORS.gray,
                      marginTop: SIZES.small / 2
                    }}
                  >
                    Lorem ipsum dolor sit amet
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      marginTop: SIZES.small
                    }}
                  >
                    <Text
                      style={{
                        fontSize: SIZES.medium,
                        fontFamily: "Roboto-Italic",
                        color: COLORS.white,
                        marginRight: 5,
                        marginTop: 3
                      }}
                    >
                      $
                    </Text>
                    <Text
                      style={{
                        fontSize: SIZES.xlarge,
                        fontFamily: "Roboto-Black",
                        color: COLORS.white
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      marginVertical: SIZES.small
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        width: 30,
                        height: 30,
                        borderWidth: 1,
                        borderColor: COLORS.white,
                        borderRadius: 15,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Image
                        source={icons.minus}
                        resizeMode="cover"
                        style={{
                          width: "70%",
                          height: "70%",
                          tintColor: COLORS.white
                        }}
                      />
                    </TouchableOpacity>

                    <Text
                      style={{
                        fontSize: SIZES.medium,
                        fontFamily: "Roboto-Italic",
                        color: COLORS.white,
                        marginHorizontal: SIZES.medium
                      }}
                    >
                      1
                    </Text>

                    <TouchableOpacity
                      style={{
                        width: 30,
                        height: 30,
                        borderWidth: 1,
                        borderColor: COLORS.white,
                        borderRadius: 15,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Image
                        source={icons.plus}
                        resizeMode="cover"
                        style={{
                          width: "70%",
                          height: "70%",
                          tintColor: COLORS.white
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            // eslint-disable-next-line react/no-unstable-nested-components
            ListFooterComponent={() => (
              <TouchableOpacity
                style={{
                  width: "100%",
                  paddingVertical: SIZES.small,
                  paddingHorizontal: SIZES.small * 1.25,
                  borderRadius: SIZES.xlarge,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: COLORS.secondary,
                  marginTop: SIZES.medium
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.large,
                    fontFamily: "Roboto-Bold",
                    color: COLORS.white
                  }}
                >
                  $28.55
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.large,
                    fontFamily: "Roboto-Bold",
                    color: COLORS.white,
                    textTransform: "uppercase"
                  }}
                >
                  Pay
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Shop;
