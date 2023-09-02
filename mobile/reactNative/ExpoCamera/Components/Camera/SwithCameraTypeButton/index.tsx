import { TouchableOpacity, Text } from "react-native";

interface SwithCameraTypeProps {
  cameraType: string;
  switchCamera: () => void;
}

const SwithCameraType: React.FunctionComponent<SwithCameraTypeProps> = ({ switchCamera, cameraType }) => {
  return (
    <TouchableOpacity
      onPress={switchCamera}
      style={{
        marginTop: 20,
        height: 25,
        width: 25,
      }}
    >
      <Text
        style={{
          fontSize: 20,
        }}
      >
        {cameraType === "front" ? "🤳" : "📷"}
      </Text>
    </TouchableOpacity>
  );
};

export default SwithCameraType;
