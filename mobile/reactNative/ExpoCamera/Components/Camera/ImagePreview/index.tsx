import { View, ImageBackground, TouchableOpacity, Text, StyleSheet } from "react-native";

type CameraPreviewProps = {
  photo: { height: number; uri: string; width: number };
  retakePicture: () => void;
  savePhoto: (uri: string) => void;
};

const CameraPreview = ({ photo, retakePicture, savePhoto }: CameraPreviewProps) => {
  const renderActionPanel = () => {
    return (
      <View style={style.actionPanelContainer}>
        <View style={style.actionPanelContainerItems}>
          <TouchableOpacity onPress={retakePicture} style={style.actionPanelButton}>
            <Text style={style.actionPanelButtonText}>Re-take</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => savePhoto(photo.uri)} style={style.actionPanelButton}>
            <Text style={style.actionPanelButtonText}>save photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={style.cameraPreviewContainer}>
      <ImageBackground source={{ uri: photo && photo.uri }} style={{ flex: 1 }}>
        {renderActionPanel()}
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  cameraPreviewContainer: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  actionPanelContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
    justifyContent: "flex-end",
  },
  actionPanelContainerItems: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionPanelButton: {
    width: 130,
    height: 40,
    alignItems: "center",
    borderRadius: 4,
  },
  actionPanelButtonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default CameraPreview;
