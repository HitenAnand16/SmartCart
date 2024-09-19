import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import logo from "../../../assets/logo.png";

const SS = () => {
  const navigation = useNavigation();
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value) => {
    setSliderValue(value);
    if (value === 1) {
      navigation.navigate("Login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bg}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.bottom}>
        <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: "500" }}>
          Swipe to proceed
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          step={0.01}
          value={sliderValue}
          onValueChange={handleSliderChange}
          minimumTrackTintColor="#F9D342"
          maximumTrackTintColor="#000000"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9D342",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 35,
    alignSelf: "center",
    marginVertical: 20,
  },
  bg: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 100,
    borderWidth: 1,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  bottom: {
    position: "absolute",
    bottom: "10%",
    width: "80%",
  },
});

export default SS;
