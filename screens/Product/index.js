import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import Slider from "@react-native-community/slider";
import RadioButtonRN from "radio-buttons-react-native";
import RadioIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/AntDesign";
import HeartIcon from "react-native-vector-icons/AntDesign";
import FilterIcon from "react-native-vector-icons/Foundation";
import { RadioButton } from "react-native-paper";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baasd",
    title: "First Item",
    totalItems: 4000,
    image: require("../../assets/images/shoes.jpg")
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63asd",
    title: "Second Item",
    totalItems: 1200,
    image: require("../../assets/images/bag.jpg")
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72asd",
    title: "Third Item",
    totalItems: 80,
    image: require("../../assets/images/jacket.jpg")
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28basdrasd",
    title: "First Item",
    totalItems: 40000,
    image: require("../../assets/images/shoes.jpg")
  }
];
const Radiodata = [
  {
    label: "20000 - 800000"
  },
  {
    label: "4000 - 5000"
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
  const handleValue = (val) => {
    console.log(val);
  };
  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        paddingVertical: 30,
        paddingHorizontal: 30,
        height: 400,
        elevation: 1
      }}
    >
      <Text
        style={{
          fontFamily: "PT-sans-bold",
          textTransform: "uppercase",
          fontSize: 17,
          marginBottom: 30,
          color: "#555"
        }}
      >
        Filter Options
      </Text>
      <View style={{ marginBottom: 20 }}>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={500}
          minimumTrackTintColor="red"
          onValueChange={handleValue}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log("sort by descending");
          }}
          style={{
            paddingBottom: 15,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1
          }}
        >
          <Text style={{ fontFamily: "PT-sans", color: "#555" }}>
            Sort by Date Descending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingBottom: 15,
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
            paddingTop: 15
          }}
          onPress={() => {
            console.log("sort by ascending");
          }}
        >
          <Text style={{ fontFamily: "PT-sans", color: "#555" }}>
            Sort by Date ascending
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <RadioButtonRN
          data={Radiodata}
          selectedBtn={(e) => console.log(e)}
          icon={<RadioIcon name="check-circle" size={25} color="#2c9dd1" />}
        />
      </View>
    </View>
  );
  const sheetRef = useRef(null);
  return (
    <>
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
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#ffa695",
                padding: 10,
                borderRadius: 4
              }}
              onPress={() => sheetRef.current.snapTo(0)}
            >
              <FilterIcon name="filter" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.list}>
          {DATA.map((item) => {
            return (
              <Item
                title={item.title}
                totalItems={item.totalItems}
                image={item.image}
                navigation={navigation}
                key={item.id}
              />
            );
          })}
        </View>
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[400, 300, 0]}
        borderRadius={25}
        renderContent={renderContent}
      />
    </>
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
    width: "90%",
    height: 50
  }
});
export default Product;
