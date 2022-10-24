import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Button,
  Alert,
  Dimensions,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "react-router-native";
import RegisterData from "./RegisterData";

export default function RegisterOwner({ navigation }) {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, width, height]}>
      <View>
        <Image
          style={styles.imgpic}
          source={{
            uri: "https://media.istockphoto.com/vectors/paw_print-vector-id931785704?k=20&m=931785704&s=612x612&w=0&h=wpnhxlh6HW0tRBxVIWynZMuJ-Lpp5rDRWjlVL2y_nt8=",
          }}
        />
      </View>
      <Text style={styles.title}>Registrate para continuar</Text>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("RegisterData")}
          title="Continua con email"
          color="#ffff"
        />
      </View>
      <Text style={styles.text}>O registrate con</Text>
      <View style={styles.options}>
        <AntDesign
          name="twitter"
          size={40}
          color="#941DE8"
          onPress={() => {
            Alert.alert("Inicio con Twitter");
          }}
        />
        <AntDesign
          name="google"
          size={40}
          color="#941DE8"
          onPress={() => {
            Alert.alert("Inicio con google");
          }}
        />
        <AntDesign
          name="facebook-square"
          size={40}
          color="#941DE8"
          onPress={() => {
            Alert.alert("Inicio con Facebook");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    backgroundColor: "#fff",
  },
  imgpic: {
    marginTop: 10,
    alignSelf: "center",
    width: 300,
    height: 300,
  },

  title: {
    fontWeight: "600",
    fontSize: 22,
    marginBottom: 10,
    marginTop: 20,
    color: "black",
    textAlign: "center",
  },
  text: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
    fontSize: 18,
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#941DE8",
    borderRadius: 10,
    marginTop: 15,
    width: 300,
    alignSelf: "center",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
});
