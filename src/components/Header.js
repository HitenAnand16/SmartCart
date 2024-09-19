import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import logo from "../../assets/logo.png";
import RNPickerSelect from "react-native-picker-select";

const getFormattedDate = () => {
  const date = new Date();
  const options = { month: "short", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

const Header = () => {
  const [selectedLocation, setSelectedLocation] = useState("Delhi");
  const todayDate = getFormattedDate(); // Get formatted date

  // Define location options for the dropdown
  const locationOptions = [
    { label: "Delhi", value: "Delhi" },
    { label: "North Delhi", value: "North Delhi" },
    { label: "South Delhi", value: "South Delhi" },
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { label: "Assam", value: "Assam" },
    { label: "Bihar", value: "Bihar" },
    { label: "Chhattisgarh", value: "Chhattisgarh" },
    { label: "Goa", value: "Goa" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "Haryana", value: "Haryana" },
    { label: "Himachal Pradesh", value: "Himachal Pradesh" },
    { label: "Jharkhand", value: "Jharkhand" },
    { label: "Karnataka", value: "Karnataka" },
    { label: "Kerala", value: "Kerala" },
    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Manipur", value: "Manipur" },
    { label: "Meghalaya", value: "Meghalaya" },
    { label: "Mizoram", value: "Mizoram" },
    { label: "Nagaland", value: "Nagaland" },
    { label: "Odisha", value: "Odisha" },
    { label: "Punjab", value: "Punjab" },
    { label: "Rajasthan", value: "Rajasthan" },
    { label: "Sikkim", value: "Sikkim" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
    { label: "Telangana", value: "Telangana" },
    { label: "Tripura", value: "Tripura" },
    { label: "Uttar Pradesh", value: "Uttar Pradesh" },
    { label: "Uttarakhand", value: "Uttarakhand" },
    { label: "West Bengal", value: "West Bengal" },
  ];

  return (
    <View style={styles.headerContainer}>
      {/* First Row: Logo and Search Bar */}
      <View style={styles.topRow}>
        <Image source={logo} style={styles.logo} />
        <TextInput
          placeholder="What are you looking for?"
          style={styles.searchBar}
        />
      </View>

      {/* Second Row: Location, Delivery, and Date */}
      <View style={styles.bottomRow}>
        <TouchableOpacity style={styles.locationContainer} onPress={() => {}}>
          <MaterialIcons name="location-on" size={18} color="gray" />
          <RNPickerSelect
            onValueChange={(value) => setSelectedLocation(value)}
            items={locationOptions}
            value={selectedLocation}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: selectedLocation, value: selectedLocation }}
          />
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color="gray"
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
          <View style={styles.iconTextContainer}>
            <FontAwesome name="truck" size={18} color="gray" />
            <View>
              <Text style={styles.iconText}>Fastest{"\n"}Delivery</Text>
            </View>
          </View>
          <View style={styles.iconTextContainer}>
            <FontAwesome name="calendar" size={18} color="gray" />
            <Text style={styles.iconText}>
              {todayDate},{"\n"}10am-10pm
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: "gray",
    fontSize: 16,
    marginTop: 4,
    marginLeft: 5,
  },
  placeholder: {
    color: "gray",
  },
});

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    paddingHorizontal: 15,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  logo: {
    width: 150,
    height: 25,
    marginRight: 15,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#f9f9f9",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowIcon: {},
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15, // Space between icons
  },
  iconText: {
    marginLeft: 5,
    color: "gray",
    fontSize: 12,
  },
});

export default Header;
