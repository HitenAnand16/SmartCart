import React from "react";
import { FlatList, Image, Text, View, StyleSheet } from "react-native";

const ProductList = ({ products }) => (
  <FlatList
    data={products}
    renderItem={({ item }) => (
      <View style={styles.productContainer}>
        <Image source={{ uri: item.url }} style={styles.productImage} />
        <Text style={styles.productTitle}>{item.title}</Text>
      </View>
    )}
    keyExtractor={(item) => item.id.toString()}
    numColumns={2} // Keep the grid at 2 columns
    contentContainerStyle={styles.productList}
    key={"two-columns"} // Static key to prevent dynamic changes causing the issue
  />
);

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productTitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
  },
  productList: {
    paddingBottom: 20,
  },
});

export default ProductList;
