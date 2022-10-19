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

export default function ButtonGradient() {
  const onPress = () => Alert.alert("funciona2");
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Alert.alert("funciona2")}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={["#941DE8", "#C691EB"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.text} onPress={() => Alert.alert("funciona 5")}>
          Sign in
        </Text>
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
    marginTop: 30,
  },
});
