import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

import Title from "../../components/Title";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    totalItems: 4000,
    image: require("../../assets/images/shoes.jpg")
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    totalItems: 1200,
    image: require("../../assets/images/bag.jpg")
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    totalItems: 80,
    image: require("../../assets/images/jacket.jpg")
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28basa",
    title: "First Item",
    totalItems: 40000,
    image: require("../../assets/images/shoes.jpg")
  }
];

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get("window").width;
const itemWidth = slideWidth + horizontalMargin * 4;
const itemHeight = 300;

const TopSeller = ({ navigation }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide} key={index}>
        <View
          style={{
            backgroundColor: "#fff",
            elevation: 1,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            overflow: "hidden",
            padding: 2
          }}
        >
          <Image source={item.image} style={{ height: 240, width: "100%" }} />
          <View
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              elevation: 1
            }}
          >
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.wrapper}>
      <Title
        title="Top Sellers"
        goToPage={() => navigation.navigate("Products")}
      />
      <View style={{ paddingTop: 20 }}>
        <Carousel
          renderItem={renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          data={DATA}
          layout={"stack"}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    marginTop: 40,
    backgroundColor: "#fff",
    paddingVertical: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin
  },
  slideInnerContainer: {
    width: slideWidth,
    flex: 1
  },
  title: {
    fontFamily: "PT-sans-bold",
    fontSize: 18
  }
});
export default TopSeller;
