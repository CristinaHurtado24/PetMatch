import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Main from "./src/components/Main.jsx";
import Onboarding from "./src/components/Onboarding.jsx";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <View styles={styles.container}>
      <></>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flew: 1,
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
