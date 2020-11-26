import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { AiFillStar } from "react-icons/ai";

import Title from "../../components/Title";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Shoes",
    totalItems: 4,
    image: require("../../assets/images/shoes.jpg")
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Bags",
    totalItems: 12,
    image: require("../../assets/images/bag.jpg")
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Jacket",
    totalItems: 8,
    image: require("../../assets/images/jacket.jpg")
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72sad",
    title: "Jacket",
    totalItems: 8,
    image: require("../../assets/images/jacket.jpg")
  }
];
const Item = ({ title, totalItems, image }) => (
  <View style={styles.item}>
    <View style={styles.imageWrapper}>
      <Image source={image} resizeMode="cover" style={styles.image} />
    </View>
    <View style={styles.categoryContent}>
      <Text style={styles.title}>{title}</Text>
      {/* <Text style={styles.count}>{totalItems} Items</Text> */}
    </View>
  </View>
);

const Category = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} totalItems={item.totalItems} image={item.image} />
  );
  return (
    <View style={styles.wrapper}>
      <Title title="Category" />
      <View style={styles.categoryWrapper}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    marginBottom: 30,
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingBottom: 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  categoryWrapper: {
    paddingTop: 10
  },
  item: {
    marginRight: 20,
    width: 80
  },
  imageWrapper: {
    width: 80,
    height: 80,
    borderRadius: 4,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  categoryContent: {
    paddingVertical: 12,
    paddingHorizontal: 10
  },
  title: {
    fontFamily: "PT-sans",
    fontSize: 14,
    paddingBottom: 5,
    textAlign: "center"
  },
  count: {
    fontFamily: "PT-sans",
    fontSize: 14,
    textAlign: "center"
  }
});
export default Category;
