import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import BackIcon from "react-native-vector-icons/FontAwesome";
import HeartIcon from "react-native-vector-icons/AntDesign";
import PlusIcon from "react-native-vector-icons/AntDesign";
import MinusIcon from "react-native-vector-icons/AntDesign";

const Detail = ({ route, navigation }) => {
  const { title, image, totalItems } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 30 }}>
        <View style={{ paddingHorizontal: 10 }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View>
              <Image
                source={image}
                style={{
                  width: "100%",
                  borderRadius: 4,
                  marginBottom: 30,
                  marginTop: 30
                }}
              />
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  position: "absolute",
                  width: 40,
                  top: 50,
                  left: 20,
                  height: 40,
                  backgroundColor: "#000",
                  borderRadius: 50
                }}
              >
                <BackIcon
                  name="long-arrow-left"
                  size={20}
                  color="#fff"
                  style={{ lineHeight: 40, textAlign: "center" }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("add to wishList")}
                style={{
                  position: "absolute",
                  width: 40,
                  top: 50,
                  right: 20,
                  height: 40,
                  backgroundColor: "#ffa695",
                  borderRadius: 40
                }}
              >
                <HeartIcon
                  name="hearto"
                  size={20}
                  color="#fff"
                  style={{ lineHeight: 40, textAlign: "center" }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  marginBottom: 10,
                  textTransform: "uppercase",
                  fontFamily: "PT-sans-bold",
                  color: "#ffa695"
                }}
              >
                {title}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  textTransform: "uppercase",
                  fontFamily: "PT-sans-bold",
                  color: "#555"
                }}
              >
                Rs. {totalItems}
              </Text>
            </View>
            <Text style={styles.copyright}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1400s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Text>
            <Text style={styles.copyright}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1400s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={() => console.log("add to cart")}
          style={{
            backgroundColor: "#ffa695",
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 25
          }}
        >
          <Text
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontFamily: "PT-sans-bold",
              color: "#fff",
              fontSize: 16
            }}
          >
            Add to cart
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#eef5f9",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 25
          }}
        >
          <TouchableOpacity
            onPress={() => console.log("increase")}
            style={{ paddingRight: 10 }}
          >
            <PlusIcon name="plus" size={20} color="#212121" />
          </TouchableOpacity>
          <Text
            style={{
              paddingRight: 10,
              fontFamily: "PT-sans-bold",
              fontSize: 17
            }}
          >
            {totalItems}
          </Text>
          <TouchableOpacity onPress={() => console.log("decrese")}>
            <MinusIcon name="minus" size={20} color="#212121" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  copyright: {
    fontFamily: "PT-sans",
    textAlign: "justify",
    lineHeight: 28,
    fontSize: 14,
    marginBottom: 30
  },
  footerContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
export default Detail;
