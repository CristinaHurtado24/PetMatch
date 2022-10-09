import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default NextButton = () => {

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          onPress={() => {
            Alert.alert('funciona')
        }}
          title="Crear una cuenta"
          color="#fff"
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
        <View style={styles.button2}>
          <Button
            onPress={() => Alert.alert('funciona2')}
            title="Inicia Sesión"
            color="#493d8a"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#493d8a",
    borderRadius: 6,
  },
  option: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: 'center'
  },
  button2: {
    color: "#493d8a",

  },
  text:{
    fontSize: 17
  }
});
