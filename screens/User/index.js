import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import ImagePicker from "../../components/ImagePicker";

const User = () => {
  const [image, setImage] = useState();
  const handeImage = (imagePath) => {
    setImage(imagePath);
  };
  console.log(image);
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.socialLogin}>
        <TouchableOpacity
          style={styles.facebook}
          onPress={() => console.log("Login With Facebook")}
        >
          <Text style={styles.socialLoginText}> facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.google}
          onPress={() => console.log("Login With Google")}
        >
          <Text style={styles.socialLoginText}>Google</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          paddingHorizontal: 20,
          paddingVertical: 30,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          marginHorizontal: 10,
          marginBottom: 30
        }}
      >
        <View>
          <ImagePicker onImageTaken={handeImage} />
        </View>
        <TextInput placeholder="Enter your name" style={styles.textInput} />
        <TextInput placeholder="Enter your Email" style={styles.textInput} />
        <TextInput placeholder="Enter your Phone No" style={styles.textInput} />
        <TextInput placeholder="Enter your Address" style={styles.textInput} />
        <TextInput
          placeholder="Enter your Postal Code"
          style={styles.textInput}
        />
        <TouchableOpacity
          onPress={() => {
            console.log("Update profile");
          }}
          style={styles.submitBtn}
        >
          <Text style={styles.btnText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30
  },
  socialLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    marginHorizontal: 10
  },
  facebook: {
    backgroundColor: "#3b5998",
    padding: 20,
    width: "50%"
  },
  google: {
    backgroundColor: "#ea4335",
    padding: 20,
    width: "50%"
  },
  socialLoginText: {
    fontFamily: "PT-sans-bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 14,
    letterSpacing: 0.7
  },
  textInput: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    height: 50,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    fontSize: 14,
    fontFamily: "PT-sans",
    paddingHorizontal: 15,
    marginBottom: 30
  },
  submitBtn: {
    backgroundColor: "#ffa695",
    padding: 20,
    borderRadius: 30
  },
  btnText: {
    fontFamily: "PT-sans-bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 18,
    letterSpacing: 0.7
  }
});
export default User;
