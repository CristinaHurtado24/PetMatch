import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonGradient from "./ButtonGradient";
import SingUpButton from "./SingUpButton";
import DogDataButton from "./DogDataButton";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  Button,
  Alert,
  BackHandler,
} from "react-native";
import { NativeScreenNavigationContainer } from "react-native-screens";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default DogData = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
          }}
          style={styles.imgpic}
        />
        <Text style={styles.titulo}>Registro Mascota</Text>
        <Text style={styles.subTitle}>Complete los campos</Text>

        <Text style={styles.campos}>Nombre</Text>

        <TextInput placeholder="Rosa" style={styles.textInput} />
        <Text style={styles.campos}>Raza</Text>
        <TextInput placeholder="Pitbull" style={styles.textInput} />
        <Text style={styles.campos}>Edad</Text>
        <TextInput placeholder="9" style={styles.textInput} />
        <Text style={styles.campos}>Sexo</Text>
        <TextInput placeholder="Macho" style={styles.textInput} />

        <SingUpButton></SingUpButton>
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
    //alignItems: "center",
    //justifyContent: "center",
    color: "grey",
  },
  margen: {
    alignItems: "left",
    justifyContent: "left",
  },

  titulo: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#34434D",
    marginBottom: 10,
  },

  subTitle: {
    fontSize: 20,
    color: "gray",
    marginBottom: 10,
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
  imgpic: {
    marginTop: 10,
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 70,
  },
});
