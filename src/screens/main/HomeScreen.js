import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../src/components/Header";
import PromoBanner from "../../../src/components/PromoBanner";
import CategoryList from "../../../src/components/CategoryList";
import ProductList from "../../../src/components/ProductList";

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch categories
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const categoryData = data.slice(0, 8).map((post) => ({
          id: post.id,
          title: post.title,
        }));
        setCategories(categoryData);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    // Fetch products
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        const productData = data.map((photo) => ({
          id: photo.id,
          title: photo.title,
          url: photo.url,
        }));
        setProducts(productData);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header />
        <PromoBanner />
        <CategoryList categories={categories} />
        {/* <ProductList products={products} /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default HomeScreen;
