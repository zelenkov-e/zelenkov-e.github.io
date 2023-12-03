import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { HomePageProps } from "../navigation/RootStack";
import Animated, { useAnimatedStyle, useSharedValue, Easing, withTiming } from "react-native-reanimated";

const Home = ({ navigation }: HomePageProps) => {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Animated.View style={[{ width: 100, height: 80, backgroundColor: "black", margin: 30 }, style]} />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </View>
  );
};

export default Home;
