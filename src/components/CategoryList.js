import React from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CategoryList = ({ categories }) => {
  const navigation = useNavigation();

  const handleViewAllPress = () => {
    navigation.navigate("Categories"); // Navigate to the "Categories" screen
  };

  // Group categories into rows of 4
  const groupedCategories = [];
  for (let i = 0; i < categories.length; i += 4) {
    groupedCategories.push(categories.slice(i, i + 4));
  }

  // Function to limit title to the first 2 words
  const getFirstTwoWords = (title) => {
    return title.split(" ").slice(0, 2).join(" ");
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Shop by Category</Text>
        <TouchableOpacity
          style={styles.viewAllButton}
          onPress={handleViewAllPress}
        >
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={groupedCategories}
        renderItem={({ item }) => (
          <View style={styles.row}>
            {item.map((category) => (
              <View key={category.id} style={styles.categoryContainer}>
                <Image
                  source={{ uri: "https://via.placeholder.com/60" }} // Placeholder image for categories
                  style={styles.icon}
                />
                <Text style={styles.categoryText}>
                  {getFirstTwoWords(category.title)}
                </Text>
              </View>
            ))}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()} // Use index as key for grouped rows
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF", // White background to match the look
  },
  headerText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#333333", // Dark grey text color
  },
  viewAllButton: {
    borderWidth: 1,
    borderColor: "black", // Light grey border to match the design
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: "#F9E400", // White background
  },
  viewAllText: {
    fontSize: 14,
    color: "#333333", // Dark grey text color for "View All"
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryContainer: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: "#F9E400",
    borderWidth: 2,
  },
  categoryText: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
});

export default CategoryList;
