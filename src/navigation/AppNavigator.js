// navigation/AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTab";
import LoginScreen from "../screens/auth/LoginScreen";
import SS from "../screens/auth/SS";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SS" component={SS}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
