import * as React from "react";
import { StyleSheet } from "react-native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./../screens/Home";
import Details from "./../screens/Details";

type RootStackParamList = {
  Home: undefined;
  Details: { item: "Product" };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
export type HomePageProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type DetailsPageProps = NativeStackScreenProps<RootStackParamList, "Details">;

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#1C357F" }, headerTintColor: "#fff" }}>
      <RootStack.Group>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Details" component={Details} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;

const styles = StyleSheet.create({
  container: {},
});
