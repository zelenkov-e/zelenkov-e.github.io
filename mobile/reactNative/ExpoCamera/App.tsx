import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./Components/Header";
import Camera from "./Components/Camera";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e7e3",
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Expo Camera" />
      <Camera />
    </SafeAreaView>
  );
}
