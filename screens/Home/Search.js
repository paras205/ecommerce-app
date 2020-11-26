import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Search = () => {
  return (
    <View style={styles.search}>
      <TextInput
        placeholder="Search product..."
        style={styles.input}
        placeholderTextColor="#212121"
      />
      <Icon name={"search"} size={22} style={styles.searchIcon} color="#555" />
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    marginVertical: 30
  },
  input: {
    backgroundColor: "#fff",
    height: 60,
    borderRadius: 25,
    paddingLeft: 30,
    width: "100%",
    fontFamily: "PT-sans",
    borderColor: "#ddd",
    borderWidth: 1,
    fontSize: 15,
    paddingRight: 30
  },
  searchIcon: {
    position: "absolute",
    right: 20,
    top: 20
  }
});
export default Search;
