import { TouchableOpacity, Text } from "react-native";

interface FlasModeProps {
  flashMode: string;
  handleFlashMode: () => void;
}

const FlasMode: React.FunctionComponent<FlasModeProps> = ({ flashMode, handleFlashMode }) => {
  return (
    <TouchableOpacity
      onPress={handleFlashMode}
      style={{
        backgroundColor: flashMode === "off" ? "#000" : "#fff",
        height: 25,
        width: 25,
      }}
    >
      <Text
        style={{
          fontSize: 20,
        }}
      >
        ⚡️
      </Text>
    </TouchableOpacity>
  );
};

export default FlasMode;
