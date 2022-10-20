import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SingIn from "./SingIn";
import navigation from "./SingIn";

import { useNavigation } from "@react-navigation/native";

export default function ButtonGradient() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      //onPress={() => navigation.navigate("Onboarding")}
      onPress={() => navigation.navigate("Home")}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={["#941DE8", "#C691EB"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.text}>Sign in</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },

  button: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    alignItems: "center",
    width: 200,
    marginTop: 15,
  },

  button2: {
    marginTop: 20,
  },
});
