import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "react-native-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]); // Replace with actual cart logic

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton}>
        <Ionicons name="trash-outline" size={24} color="#ff6347" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Ionicons name="cart-outline" size={120} color="black" />
          <Text style={styles.emptyMessage}>Your cart is currently empty.</Text>
          <TouchableOpacity style={styles.shopButton}>
            <Text style={styles.shopButtonText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCartItem}
          contentContainerStyle={styles.cartList}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
    alignSelf: "center",
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyMessage: {
    fontSize: 20,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  shopButton: {
    backgroundColor: "#FDD835", // Yellow color for the CTA button
    padding: 15,
    borderRadius: 30,
  },
  shopButtonText: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  cartList: {
    paddingBottom: 100,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  itemPrice: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  removeButton: {
    padding: 5,
  },
});

export default CartScreen;
