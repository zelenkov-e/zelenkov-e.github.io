import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CaptureButton from "./CaptureButton";
import CameraPreview from "./ImagePreview";
import SwithCameraTypeButton from "./SwithCameraTypeButton";
import FlasMode from "./FlashMode";

interface CameraProps {}

const CameraComponet = () => {
  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);
  const [cameraType, setCameraType] = React.useState(CameraType.back);
  const [flashMode, setFlashMode] = React.useState(FlashMode.off);

  // FOR TESTING
  console.log("previewVisible", previewVisible);
  console.log("capturedImage", capturedImage);

  let camera: Camera;

  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const activeCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const savePhoto = async (uri: string) => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
        // Save image to media library
        await MediaLibrary.saveToLibraryAsync(uri);
        console.log("Image successfully saved");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    activeCamera();
  };

  const switchCamera = () => {
    if (cameraType === "back") {
      setCameraType(CameraType.front);
    } else {
      setCameraType(CameraType.back);
    }
  };

  const handleFlashMode = () => {
    if (flashMode === "on") {
      setFlashMode(FlashMode.off);
    } else if (flashMode === "off") {
      setFlashMode(FlashMode.on);
    } else {
      setFlashMode(FlashMode.auto);
    }
  };

  const renderCamera = () => {
    if (startCamera) {
      if (previewVisible && capturedImage) {
        return <CameraPreview photo={capturedImage} savePhoto={savePhoto} retakePicture={retakePicture} />;
      } else {
        return (
          <Camera flashMode={flashMode} style={styles.camera} ref={(r) => (camera = r)}>
            <View style={styles.cameraActionPanel}>
              <View style={styles.cameraLeftActionPanel}>
                <FlasMode flashMode={flashMode} handleFlashMode={handleFlashMode} />
                <SwithCameraTypeButton cameraType={cameraType} switchCamera={switchCamera} />
              </View>

              <CaptureButton onPress={takePicture} />
            </View>
          </Camera>
        );
      }
    } else {
      return (
        <View style={styles.cameraContainer}>
          <TouchableOpacity style={styles.button} onPress={activeCamera}>
            <Text style={styles.buttonText}>Take picture</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  return <View style={{ flex: 1 }}>{renderCamera()}</View>;
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: { flex: 1, width: "100%" },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },

  button: {
    width: 130,
    borderRadius: 4,
    backgroundColor: "#14274e",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  cameraActionPanel: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  cameraLeftActionPanel: {
    position: "absolute",
    left: "5%",
    top: "10%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default CameraComponet;
