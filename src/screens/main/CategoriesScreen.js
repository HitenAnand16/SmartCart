import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

const CategoriesScreen = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const getTitleSnippet = (title) => {
    return title.split(" ").slice(0, 2).join(" ");
  };

  const increaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 0 ? prevQuantities[id] - 1 : 0,
    }));
  };

  const renderProduct = ({ item }) => {
    const quantity = quantities[item.id] || 0;

    return (
      <View style={styles.productCard}>
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={styles.productImage}
        />
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.productTitle}>{getTitleSnippet(item.title)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => decreaseQuantity(item.id)}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              onPress={() => increaseQuantity(item.id)}
              style={styles.quantityButton}
            >
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>Shop by Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryContainer}>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>Grocery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>Fruits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>Vegetables</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>Drinks</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={styles.productsSection}>
        <Text style={styles.productsTitle}>Available Products</Text>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFD",
  },
  categorySection: {
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 15,
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  categoryItem: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 12,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  productsSection: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  productsTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
  },
  productCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 15,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  quantityButton: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  addToCartButton: {
    backgroundColor: "#FF6F61",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addToCartText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default CategoriesScreen;
