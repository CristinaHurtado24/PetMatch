import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Onboarding from "./src/components/Onboarding.js";
import LandingRegister from "./src/components/LandingRegister.js";


export default function App() {
  
  return (
    <View style={styles.container}>
      <LandingRegister/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
