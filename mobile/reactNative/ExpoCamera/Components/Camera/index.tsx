import React from "react";

import { View, Text, StyleSheet } from "react-native";

interface CameraProps {}

const Hader: React.FC<CameraProps> = () => {
  return (
    <View>
      <Text style={styles.text}>Camera</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default Hader;
