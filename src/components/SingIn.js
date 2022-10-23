import * as React from "react";
import ButtonGradient from "./ButtonGradient";
import { AntDesign } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  Button,
  useWindowDimensions,
  Alert,
  BackHandler,
  ScrollView,
} from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import axios from "axios";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Correo invalido")
    .required("El correo es requerido"),
  user_password: Yup.string().required("La contrasena es requerida"),
});
const { width, height } = Dimensions.get("window");

const initialValues = {
  email: "",
  user_password: "",
};

export default SingIn = ({ navigation }) => {

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
        </View>
        <FormContainer>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ errors, values, handleSubmit, handleChange }) => {
              return (
                <>
                  <FormInput
                    autoCapitalize="none"
                    title="Correo Electrónico"
                    placeholder="petmatch@gmail.com"
                    name="email"
                    onChange={handleChange("email")}
                  />
                  <FormInput
                    autoCapitalize="none"
                    secureTextEntry
                    title="Contraseña"
                    placeholder="********"
                    name="user_password"
                    onChange={handleChange("user_password")}
                  />
                  <ButtonGradient title="Sign-In" onPress={handleSubmit} />
                </>
              );
            }}
          </Formik>
        </FormContainer>

        {/* <View style={styles.options}>
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
        </View> */}
        <View style={styles.buttontext}>
          <Button
            color={"grey"}
            title="¿Olvidaste tu contraseña?"
            //onPress={() => navigation.navigate(Home)}
            onPress={() => Alert.alert("Poner ruta olvide contraseña")}
          />
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
    alignItems: "center",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  container: {
    alignItems: "center",
  },
  titulo: {
    marginTop: 10,
    fontSize: 60,
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

    width: 250,
    height: 250,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
});
