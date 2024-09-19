// context/AppContext.js
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../services/api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        setUserToken(token);
        setIsAuthenticated(true);
      }
    };
    loadToken();
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const { token, user } = await login(username, password);
      setUserToken(token);
      setUser(user);
      setIsAuthenticated(true);
      await AsyncStorage.setItem("userToken", token);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      setUserToken(null);
      setUser(null);
      setIsAuthenticated(false);
      await AsyncStorage.removeItem("userToken");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <AppContext.Provider
      value={{ isAuthenticated, user, handleLogin, handleLogout }}
    >
      {children}
    </AppContext.Provider>
  );
};
