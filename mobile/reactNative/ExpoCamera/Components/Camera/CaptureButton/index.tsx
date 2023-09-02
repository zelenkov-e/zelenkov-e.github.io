import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface CaptureButtonProps {
  onPress: () => void;
}

const CaptureButton: React.FunctionComponent<CaptureButtonProps> = ({ onPress }) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          alignSelf: "center",
          flex: 1,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={onPress}
          style={{
            width: 70,
            height: 70,
            bottom: 0,
            borderRadius: 50,
            backgroundColor: "#fff",
          }}
        />
      </View>
    </View>
  );
};

export default CaptureButton;
