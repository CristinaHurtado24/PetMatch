import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export default NextButton = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("LandingRegister")}
          title="Crear una cuenta"
          color="#fff"
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
        <View style={styles.button2}>
          <Button
            onPress={() => navigation.navigate("SingIn")}
            title="Inicia Sesión"
            color="#941DE8"
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
    backgroundColor: "#941DE8",
    borderRadius: 6,
  },
  option: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  button2: {
    color: "#941DE8",
  },
  text: {
    fontSize: 17,
  },
});
