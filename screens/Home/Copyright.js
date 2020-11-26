import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Copyright = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.copyright}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Text>
      <Text style={styles.copyright}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    paddingBottom: 40,
    backgroundColor: "#fff",
    paddingTop: 40,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25
  },
  copyright: {
    fontFamily: "PT-sans",
    textAlign: "justify",
    lineHeight: 28,
    fontSize: 14,
    marginBottom: 30
  }
});
export default Copyright;
