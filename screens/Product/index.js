import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import HeartIcon from "react-native-vector-icons/AntDesign";

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
  }
];
const Item = ({ title, totalItems, image, navigation }) => (
  <View style={styles.item}>
    <View style={{ backgroundColor: "#fff", elevation: 1 }}>
      <Image source={image} style={styles.image} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.ratings}>
          <Icon name="star" size={12} color="#ffca28" style={styles.star} />
          <Icon name="star" size={12} color="#ffca28" style={styles.star} />
          <Icon name="star" size={12} color="#ffca28" style={styles.star} />
          <Icon name="star" size={12} color="#ffca28" style={styles.star} />
          <Icon name="star" size={12} color="#ffca28" style={styles.star} />
        </View>
        <View style={styles.addToWishList}>
          <HeartIcon name="hearto" size={14} color="#f66" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View style={styles.categoryContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.count}>Rs. {totalItems} </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Detail", {
              title,
              image,
              totalItems
            })
          }
          style={styles.showBtn}
        >
          <Text style={styles.btnText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
const Product = ({ navigation }) => {
  return (
    <ScrollView style={styles.wrapper}>
      <View
        style={{
          paddingVertical: 20,
          flexDirection: "row",
          paddingHorizontal: 10,
          justifyContent: "space-between"
        }}
      >
        <TextInput placeholder="Search..." style={styles.producSearch} />
      </View>
      <View style={styles.list}>
        {DATA.map((item) => {
          return (
            <Item
              title={item.title}
              totalItems={item.totalItems}
              image={item.image}
              navigation={navigation}
              id={item.id}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  item: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 4,
    marginBottom: 10,
    width: "50%"
  },
  image: {
    width: "100%",
    height: 180
  },
  ratings: {
    flexDirection: "row",
    marginTop: 15,
    paddingHorizontal: 12
  },
  addToWishList: {
    marginTop: 15,
    paddingHorizontal: 10
  },
  star: {
    marginRight: 3
  },
  categoryContent: {
    paddingVertical: 12,
    paddingHorizontal: 10
  },
  title: {
    fontFamily: "PT-sans",
    fontSize: 15,
    paddingBottom: 5
  },
  count: {
    fontFamily: "PT-sans",
    fontSize: 14
  },
  showBtn: {
    backgroundColor: "#25d06f",
    marginRight: 10,
    color: "#fff",
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 8
  },
  btnText: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 12,
    fontFamily: "PT-sans"
  },
  producSearch: {
    fontFamily: "PT-sans",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    width: "100%",
    height: 50
  }
});
export default Product;
