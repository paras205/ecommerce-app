import React from "react";
import Swiper from "react-native-swiper";
import { View, StyleSheet, Image } from "react-native";

const Banner = () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper autoplay height={300}>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/images/banner_two.jpg")}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/images/banner_three.jpg")}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/images/banner_one.jpg")}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 300,
    width: "95%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 50,
    marginTop: 10
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8
  }
});
export default Banner;
