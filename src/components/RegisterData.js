import * as React from "react";

import DogDataButton from "./DogDataButton";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default RegisterData = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Registro Dueño</Text>
        <Text style={styles.subTitle}>Complete los campos</Text>

        <Text style={styles.campos}>Nombre</Text>

        <TextInput placeholder="Rosa" style={styles.textInput} />
        <Text style={styles.campos}>Apellido</Text>
        <TextInput placeholder="Meltrozo" style={styles.textInput} />
        <Text style={styles.campos}>Correo</Text>
        <TextInput placeholder="Petmatch@gmail.com" style={styles.textInput} />
        <Text style={styles.campos}>Contraseña</Text>
        <TextInput placeholder="1234" style={styles.textInput} />
        <Text style={styles.campos}>Confirmar Contraseña</Text>
        <TextInput placeholder="1234" style={styles.textInput} />
        <Text style={styles.campos}>Telefono</Text>
        <TextInput placeholder="+58 4129993067" style={styles.textInput} />
        <DogDataButton></DogDataButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  campos: {
    fontSize: 15,
    alignItems: "left",
    justifyContent: "left",
    marginTop: 5,
    color: "grey",
  },
  margen: {
    alignItems: "left",
    justifyContent: "left",
  },

  titulo: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#34434D",
  },

  subTitle: {
    fontSize: 20,
    color: "gray",
  },
  buttontext: {
    fontSize: 10,
    color: "grey",
    marginTop: 20,
  },

  textGrey: {
    fontSize: 15,
    color: "grey",
    marginTop: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "#fff",
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 5,
    borderRadius: 30,
  },

  imgStyle: {
    width: width,
    height: 300,

    alignItems: "center",
    justifyContent: "center",
  },
  imgpic: {
    marginTop: 10,

    width: 300,
    height: 300,
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
});
