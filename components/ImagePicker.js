import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import CameraIcon from "react-native-vector-icons/AntDesign";

const ImagePickerComponent = (props) => {
  const [pickedImage, setPickedImage] = useState();
  const verifyPermission = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficent permissions!",
        "You need to grant camera permission to use this feature",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;
    // ImagePicker.launchImageLibraryAsync();
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    setPickedImage(image.uri);
    props.onImageTaken(image.uri);
  };
  return (
    <View>
      <TouchableOpacity style={styles.wrapper} onPress={takeImageHandler}>
        {!pickedImage ? (
          <View>
            <CameraIcon
              name="camerao"
              size={40}
              color="#212121"
              style={{ marginBottom: 15, textAlign: "center" }}
            />
            <Text style={styles.imageText}>Take Image</Text>
          </View>
        ) : (
          <Image source={{ uri: pickedImage }} style={styles.image} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 150,
    backgroundColor: "#eef5f9",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 15
  },
  imageText: {
    fontFamily: "PT-sans-bold",
    color: "#212121",
    textTransform: "uppercase"
  },
  image: {
    width: "100%",
    height: 150
  }
});

export default ImagePickerComponent;
