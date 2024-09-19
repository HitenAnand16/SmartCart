import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const MyItem = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Promo Banner */}
      <View style={styles.promoBanner}>
        <Text style={styles.promoText}>Your Items</Text>
      </View>

      {/* Your Items Section */}
      <View style={styles.itemsSection}>
        <Text style={styles.itemsTitle}>Saved Items</Text>
        <TouchableOpacity style={styles.itemCard}>
          <Text style={styles.itemText}>Item 1</Text>
          <Text style={styles.itemDescription}>Description for item 1...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemCard}>
          <Text style={styles.itemText}>Item 2</Text>
          <Text style={styles.itemDescription}>Description for item 2...</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemCard}>
          <Text style={styles.itemText}>Item 3</Text>
          <Text style={styles.itemDescription}>Description for item 3...</Text>
        </TouchableOpacity>
      </View>

      {/* Add New Item Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Item</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  promoBanner: {
    backgroundColor: "#FFD700",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  promoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  itemsSection: {
    padding: 15,
  },
  itemsTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
  },
  itemCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: "#666",
  },
  addButton: {
    backgroundColor: "#FFD700",
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default MyItem;
