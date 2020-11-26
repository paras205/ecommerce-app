import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import Banner from "./Banner";
import Category from "./Category";
import Product from "./Product";
import TopSeller from "./TopSeller";
import FeaturedProducts from "./Featured";
import CopyRight from "./Copyright";

const HomePage = ({ navigation }) => {
  return (
    <ScrollView style={styles.wrapper}>
      <StatusBar style="auto" />
      <Banner />
      <Category navigation={navigation} />
      <Product navigation={navigation} />
      <TopSeller navigation={navigation} />
      <FeaturedProducts navigation={navigation} />
      <CopyRight />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight
  }
});
export default HomePage;
