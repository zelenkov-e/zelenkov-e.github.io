import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";

export default function App() {
  const [loading, error, weather] = useGetWeather();

  console.log("weather", weather);

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return <View style={styles.container}>{error ? <ErrorItem /> : <ActivityIndicator size={"large"} color={"blue"} />}</View>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});
