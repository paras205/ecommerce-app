import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const Deal = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          console.log("go to deals page");
        }}
      >
        <ImageBackground
          source={require("../../assets/images/banner_two.jpg")}
          style={styles.image}
        >
          <View
            style={{ position: "relative", zIndex: 99, paddingHorizontal: 20 }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "PT-sans-bold",
                fontSize: 19,
                textTransform: "uppercase"
              }}
            >
              View All Deal
            </Text>
          </View>
          <View style={styles.overlay} />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 30
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: 200,
    justifyContent: "center",
    borderRadius: 4,
    overflow: "hidden",
    zIndex: 99,
    position: "relative"
  },
  overlay: {
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.4,
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    zIndex: 9
  }
});

export default Deal;
