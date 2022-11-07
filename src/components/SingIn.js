import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonGradient from "./ButtonGradient";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { database, auth } from "../config/fb";

import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
  TouchableOpacity,
} from "react-native";
import { NativeScreenNavigationContainer } from "react-native-screens";

const { width, height } = Dimensions.get("window");

export default SingIn = () => {
  //const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Home", { userEmail: email });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.mainContainer}
      scrollEnabled
    >
      <View style={styles.mainContainer}>
        <View style={styles.imgStyle}>
          <Image
            source={require("../imgs/PHOTO-2022-10-09-23-15-53.jpg")}
            style={styles.imgpic}
          ></Image>
        </View>
        <View style={styles.container}>
          <Text style={styles.titulo}>Hola!</Text>
          <Text style={styles.subTitle}>Accede a tu cuenta</Text>
          <TextInput
            placeholder="Petmatch@gmail.com"
            style={styles.textInput}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            placeholder="Contraseña"
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.options}>
          <AntDesign
            name="twitter"
            size={40}
            color="#941DE8"
            onPress={() => {
              Alert.alert("Inicio con Twitter (Proximamente)");
            }}
          />
          <AntDesign
            name="google"
            size={40}
            color="#941DE8"
            onPress={() => {
              Alert.alert("Inicio con google (Proximamente)");
            }}
          />
          <AntDesign
            name="facebook-square"
            size={40}
            color="#941DE8"
            onPress={() => {
              Alert.alert("Inicio con Facebook (Proximamente)");
            }}
          />
        </View>

        <View style={styles.buttontext}>
          <Button
            color={"grey"}
            title="¿Olvidaste tu contraseña?"
            //onPress={() => navigation.navigate(Home)}
            onPress={() => Alert.alert("Poner ruta olvide contraseña")}
          />
        </View>

        {/* <View>
            <Button title="Sign In" onPress={handleSignIn} />
          </View> */}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.container3}
            //onPress={() => navigation.navigate("Onboarding")}
            onPress={handleSignIn}
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
        </View>
        <View style={styles.buttontext}>
          <Button
            title="No tengo cuenta"
            color={"grey"}
            //onPress={() => Alert.alert("Poner ruta crear cuenta")}
            onPress={() => navigation.navigate("LandingRegister")}
          ></Button>
        </View>
      </View>
    </KeyboardAwareScrollView>
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
  },
  titulo: {
    fontSize: 80,
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
    marginTop: 20,
    borderRadius: 30,
  },
  imgStyle: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  imgpic: {
    marginTop: 10,

    width: 300,
    height: 300,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
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

  container3: {
    alignItems: "center",
    width: 200,
    marginTop: 15,
  },

  button2: {
    marginTop: 20,
  },
});
