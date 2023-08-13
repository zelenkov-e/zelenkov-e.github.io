import React, { useState } from "react";
import { FlatList, TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import AddItem, { IItem } from "./src/components/AddItem";
import Item from "./src/components/Item";

export default function App() {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping list" />
      <View style={styles.contentWrapper}>
        <AddItem setShoppingList={setShoppingList} shoppingList={shoppingList} />
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.item}-${index}`}
          renderItem={({ item }) => <Item item={item.item} quantity={item.quantity} />}
        />
        {shoppingList.length > 0 && (
          <TouchableOpacity style={styles.removeItemButton} onPress={() => setShoppingList([])}>
            <Text style={styles.buttonText}>Remove All Items</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e7e3",
  },
  contentWrapper: {
    padding: 20,
  },
  removeItemButton: {
    backgroundColor: "#ff0000",
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "500" },
});
