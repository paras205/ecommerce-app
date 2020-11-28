import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import PlusIcon from "react-native-vector-icons/AntDesign";
import MinusIcon from "react-native-vector-icons/AntDesign";
import Constants from "expo-constants";

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
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28basdr",
    title: "First Item",
    totalItems: 40000,
    image: require("../../assets/images/shoes.jpg")
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28basdrasdasd",
    title: "First Item",
    totalItems: 40000,
    image: require("../../assets/images/shoes.jpg")
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28basdasdr",
    title: "First Item",
    totalItems: 40000,
    image: require("../../assets/images/shoes.jpg")
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28basdrsd",
    title: "First Item",
    totalItems: 40000,
    image: require("../../assets/images/shoes.jpg")
  }
];
const Item = ({ title, totalItems, image }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
    <View style={styles.cartItemContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>Rs. {totalItems} </Text>
    </View>
    <View style={styles.action}>
      <TouchableOpacity
        onPress={() => console.log("increase")}
        style={{ paddingRight: 10 }}
      >
        <PlusIcon name="plus" size={15} color="#555" />
      </TouchableOpacity>
      <Text
        style={{
          paddingRight: 10,
          fontFamily: "PT-sans-bold",
          fontSize: 15,
          color: "#555"
        }}
      >
        {totalItems}
      </Text>
      <TouchableOpacity onPress={() => console.log("decrese")}>
        <MinusIcon name="minus" size={15} color="#555" />
      </TouchableOpacity>
    </View>
  </View>
);
const CartPage = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} totalItems={item.totalItems} image={item.image} />
  );
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartItemWrapper}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Constants.statusBarHeight
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    textAlign: "center",
    borderRadius: 4
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4
  },
  cartItemContent: {
    textAlign: "center"
  },
  title: {
    textAlign: "center",
    fontFamily: "PT-sans-bold",
    marginBottom: 5,
    fontSize: 15,
    color: "#212121"
  },
  count: {
    textAlign: "center",
    fontFamily: "PT-sans",
    color: "#555"
  },
  action: {
    flexDirection: "row",
    backgroundColor: "#eef5f9",
    padding: 15,
    alignItems: "center",
    width: 120,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 25
  }
});

export default CartPage;
