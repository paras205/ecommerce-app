import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import HeartIcon from "react-native-vector-icons/AntDesign";

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
const Item = ({ title, totalItems, image }) => (
  <View style={styles.item}>
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
        onPress={() => console.log("go to product Page")}
        style={styles.showBtn}
      >
        <Text style={styles.btnText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const FeaturedProducts = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} totalItems={item.totalItems} image={item.image} />
  );
  return (
    <View style={styles.wrapper}>
      <Title
        title="Featured Products"
        goToPage={() => navigation.navigate("Products")}
      />
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
    marginTop: 30,
    paddingBottom: 30,
    marginBottom: 20
  },
  categoryWrapper: {
    paddingTop: 10
  },
  item: {
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 4,
    elevation: 1,
    width: 200
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
  }
});
export default FeaturedProducts;
