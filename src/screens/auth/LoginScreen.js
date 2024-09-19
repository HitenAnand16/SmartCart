import React, { useEffect, useState, useContext, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AppContext } from "../../../redux/AppContext";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons"; // Make sure you have expo icons installed
import logo from "../../../assets/logo.png";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(AppContext);
  const navigation = useNavigation();

  // Animation states
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value (invisible)
  const translateYAnim = useRef(new Animated.Value(20)).current; // Initial Y position below the screen

  useEffect(() => {
    // Start the fade and slide animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1, // Fade to opacity 1 (visible)
        duration: 1000, // 1 second fade duration
        useNativeDriver: true,
      }),
      Animated.spring(translateYAnim, {
        toValue: 0, // Slide up to the original position
        friction: 5, // Makes the movement a bit springy
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, translateYAnim]);

  const onLoginPress = () => {
    if (!username || !password) {
      Alert.alert("Please fill in both fields");
      return;
    }

    handleLogin(username, password);
    navigation.replace("BottomTabs", {
      screen: "Home",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.avoidingView}
        >
          <View style={styles.background} />

          {/* Login Form */}
          <View style={styles.card}>
            <Image source={logo} style={styles.logo} />

            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={24} color="#888" />
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                placeholderTextColor="#888"
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={24} color="#888" />
              <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
                style={styles.input}
                placeholderTextColor="#888"
              />
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Alert.alert("Forgot Password clicked")}
            >
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signupText}>
                Don't have an account? Sign up
              </Text>
            </TouchableOpacity>
          </View>

          {/* Animated "By Hiten Anand" Text */}
          <Animated.View
            style={{
              position: "absolute",
              bottom: 20,
              opacity: fadeAnim,
              transform: [{ translateY: translateYAnim }],
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              By Hiten Anand.
            </Text>
          </Animated.View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 35,
    alignSelf: "center",
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#F9D342",
  },
  avoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#F9D342", // Use a yellow color as shown in the image
  },

  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    height: 50,
    backgroundColor: "#F9A825", // Bright yellow for button to match the theme
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPassword: {
    textAlign: "center",
    color: "#2196F3",
    marginTop: 10,
    fontSize: 16,
  },
  signupText: {
    textAlign: "center",
    color: "#333",
    marginTop: 20,
    fontSize: 16,
  },
});

export default LoginScreen;
