import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  requestCameraPermissionsAsync,
} from "expo-image-picker";
import { useState } from "react";
import { AppColors } from "../../constants/colors";
import OutlineButton from "../UI/OutlineButton";

function ImagePicker({onTakeImage}) {
  const [pickedImage, setPickedImage] = useState();

  async function verifyPermissions() {
    const permissionResult = await requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }
    return permissionResult.granted;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.uri);
    onTakeImage(image.uri);
  }

  let imagePreview = <Text>No image taken yet.</Text>

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlineButton icon="camera" onPress={takeImageHandler}>Take Image</OutlineButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 180,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.primary100,
        borderRadius: 4,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
