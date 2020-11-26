import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Title = ({ title, goToPage }) => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={goToPage}>
        <Text style={styles.btnText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  titleWrapper: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    textTransform: "uppercase",
    fontFamily: "PT-sans-bold",
    fontSize: 16
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ff6347",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50
  },
  btnText: {
    fontFamily: "PT-sans",
    color: "#fff",
    fontSize: 13,
    textTransform: "uppercase"
  }
});
export default Title;
