import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonGradient from "./ButtonGradient";

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

export default Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
          }}
          style={styles.imgpic}
        />
      </View>
      <Text style={styles.person}>Mascota</Text>

      <Text style={styles.textInput}>Nombre Mascota</Text>
      <Text style={styles.textInput}>Raza</Text>
      <Text style={styles.textInput}>Edad</Text>
      <Text style={styles.textInput}>Sexo</Text>

      <Text style={styles.person}>Dueño</Text>
      <Text style={styles.textInput}>Nombre Dueño</Text>
      <Text style={styles.textInput}>Apellido</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
  },

  textshadow: {
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingStart: 30,
    paddingEnd: 30,
    width: "80%",
    height: 50,
    marginTop: 5,
  },
  person: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  image: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "800",
    fontSize: 22,
    marginBottom: 10,
    marginTop: -40,
    color: "black",
    textAlign: "center",
  },
  text: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
    fontSize: 18,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#493d8a",
    borderRadius: 10,
    marginTop: 15,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  imgpic: {
    marginTop: 10,
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 70,
  },
  textInput: {
    borderWidth: 1,
    fontSize: 20,
    borderColor: "black",
    backgroundColor: "#fff",
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 25,
  },
});
