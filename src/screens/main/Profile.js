import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const Profile = () => {
  const navigation = useNavigation(); // Initialize navigation
  const userName = "John Doe"; // Example user name
  const email = "john.doe@example.com"; // Example email
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial fade value

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleLogout = () => {
    // Handle logout logic here, such as clearing tokens or user data

    // Navigate to LoginScreen
    navigation.replace("Login"); // Replace current screen with LoginScreen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Header with Gradient */}
      <LinearGradient
        colors={["#00AEEF", "#00C6FB"]}
        style={styles.profileHeader}
      >
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual profile image
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="camera-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.email}>{email}</Text>
      </LinearGradient>

      {/* Scrollable Profile Actions */}
      <View>
        <Animated.View style={[styles.profileActions, { opacity: fadeAnim }]}>
          <TouchableHighlight
            style={[styles.actionItem, styles.firstActionItem]}
            underlayColor="#E0F7FA"
          >
            <View style={styles.actionContent}>
              <Ionicons name="person-outline" size={24} color="#00AEEF" />
              <Text style={styles.actionText}>Account Details</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.actionItem} underlayColor="#FFF9C4">
            <View style={styles.actionContent}>
              <Ionicons name="settings-outline" size={24} color="#FDD835" />
              <Text style={styles.actionText}>Settings</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.actionItem} underlayColor="#FFF3E0">
            <View style={styles.actionContent}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#FF7043"
              />
              <Text style={styles.actionText}>Notifications</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.actionItem, styles.logoutItem]}
            underlayColor="#FFEBEE"
            onPress={handleLogout} // Add onPress handler
          >
            <View style={styles.actionContent}>
              <Ionicons name="log-out-outline" size={24} color="#ff6347" />
              <Text style={[styles.actionText, { color: "#ff6347" }]}>
                Logout
              </Text>
            </View>
          </TouchableHighlight>
        </Animated.View>

        {/* Activity Section */}
        <View style={styles.activitySection}>
          <Text style={styles.activityTitle}>Your Activity</Text>
          <View style={styles.activityItems}>
            <View style={styles.activityCard}>
              <Ionicons name="cart-outline" size={30} color="#00AEEF" />
              <Text style={styles.activityCount}>5</Text>
              <Text style={styles.activityLabel}>Orders</Text>
            </View>
            <View style={styles.activityCard}>
              <Ionicons name="heart-outline" size={30} color="#FDD835" />
              <Text style={styles.activityCount}>3</Text>
              <Text style={styles.activityLabel}>Wishlist</Text>
            </View>
            <View style={styles.activityCard}>
              <Ionicons name="time-outline" size={30} color="#FF7043" />
              <Text style={styles.activityCount}>2</Text>
              <Text style={styles.activityLabel}>Recently Viewed</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  profileHeader: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    borderRadius: 30,
    marginBottom: 30,
    marginHorizontal: 10,
  },
  profileImageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#00AEEF",
    padding: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
  userName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "#f0f0f0",
  },
  profileActions: {
    paddingHorizontal: 20,
  },
  actionItem: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  firstActionItem: {
    marginTop: -20,
  },
  actionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    flex: 1,
    fontSize: 18,
    color: "#333",
    marginLeft: 15,
  },
  logoutItem: {
    backgroundColor: "#FFEBEE",
  },
  activitySection: {
    paddingHorizontal: 20,
  },
  activityTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  activityItems: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  activityCard: {
    width: "30%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  activityCount: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  activityLabel: {
    fontSize: 16,
    color: "#888",
  },
});

export default Profile;
