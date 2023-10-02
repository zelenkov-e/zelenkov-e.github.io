import React from "react";
import { Button, View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to About" onPress={() => navigation.navigate("About")} />
    </View>
  );
};
export default HomeScreen;
