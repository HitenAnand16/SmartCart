import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import fruitImage from "../../assets/fruit1.png"; // Example fruit image (replace with actual)

const { width: screenWidth } = Dimensions.get("window");

const promoBanners = [
  { id: "1", image: fruitImage, cashback: "50%", subText: "ON GROCERIES" },
  { id: "2", image: fruitImage, cashback: "30%", subText: "ON FRUITS" },
  { id: "3", image: fruitImage, cashback: "20%", subText: "ON GROCERIES" },
  { id: "4", image: fruitImage, cashback: "10%", subText: "ON FRUITS" },
  // Add more banners here
];

// Define a mapping of IDs to background colors
const backgroundColors = {
  1: "#FF6347", // Tomato
  2: "#FFD700", // Gold
  3: "#32CD32", // LimeGreen
  4: "#00BFFF", // DeepSkyBlue
};

const PromoBanner = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % promoBanners.length;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 2000); // 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [currentIndex]);

  return (
    <FlatList
      ref={flatListRef}
      data={promoBanners}
      renderItem={({ item }) => (
        <View
          style={[
            styles.bannerContainer,
            { backgroundColor: backgroundColors[item.id] },
          ]}
        >
          <View style={styles.textContainer}>
            <Text style={styles.cashbackText}>
              {item.cashback}
              {"\n"}CASHBACK
            </Text>
            <Text style={styles.subText}>{item.subText}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Try it out now</Text>
            </TouchableOpacity>
          </View>
          <Image source={item.image} style={styles.image} />
        </View>
      )}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carousel}
    />
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    width: screenWidth, // Adjust width to fit within the screen
  },
  textContainer: {
    flex: 1,
  },
  cashbackText: {
    fontSize: 28,
    fontWeight: "900",
    color: "#000",
  },
  subText: {
    fontSize: 20,
    color: "#000",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#000", // Black button
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: "68%",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  image: {
    width: 150, // Adjust size according to your image
    height: 120,
    resizeMode: "cover",
  },
  carousel: {
    alignItems: "center",
  },
});

export default PromoBanner;
