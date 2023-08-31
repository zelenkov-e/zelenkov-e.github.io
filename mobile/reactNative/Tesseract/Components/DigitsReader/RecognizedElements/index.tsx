import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    height: "10rem",
    margin: 15,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

type RecognizedElementsProps = {
  elements: string[];
};

const RecognizedElements = (props: RecognizedElementsProps) => {
  const { elements } = props;
  return (
    <View style={styles.container}>
      <FlatList data={elements} renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} />
    </View>
  );
};

export default RecognizedElements;
