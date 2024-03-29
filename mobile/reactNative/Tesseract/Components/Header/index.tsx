import React from "react";

import { View, Text, StyleSheet } from "react-native";

interface HaderProps {
  title: string;
}

const Hader: React.FC<HaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cfcfcf",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default Hader;
