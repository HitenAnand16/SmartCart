import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./src/navigation/BottomTab"; // Update path as necessary
import { AppProvider } from "./redux/AppContext";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  </>
);

export default App;
