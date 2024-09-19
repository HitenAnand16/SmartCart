import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import HomeScreen from "../screens/main/HomeScreen";
import CategoriesScreen from "../screens/main/CategoriesScreen";
import CartScreen from "../screens/main/CartScreen";
import MyItem from "../screens/main/MyItem";
import Profile from "../screens/main/Profile";

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;
        let iconSize = focused ? 25 : 20;

        switch (route.name) {
          case "Home":
            iconName = "home";
            break;
          case "Categories":
            iconName = "grid";
            break;
          case "MyItem":
            iconName = "star";
            break;
          case "Cart":
            iconName = "cart";
            break;
          case "Profile":
            iconName = "person";
            break;
          default:
            iconName = "help";
        }

        return <Ionicons name={iconName} size={iconSize} color={color} />;
      },
      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: "bold",
      },
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "#939185",
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Categories" component={CategoriesScreen} />
    <Tab.Screen name="MyItem" component={MyItem} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default BottomTabs;
