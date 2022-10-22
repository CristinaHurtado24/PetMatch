import * as React from "react";
import {useState} from "react";
import {Formik} from "formik";
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
import ButtonGradient from "./ButtonGradient";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormContainer from './FormContainer';
import FormInput from './FormInput';

const {width} = Dimensions.get("window");
const {height} = Dimensions.get("window");

const validationSchema = Yup.object({
  email: Yup.string().email('Correo invalido').required('El correo es requerido'),
  password: Yup.string().required('La contrasena es requerida')
})

export default SingIn = ({ navigation }) => {
  //const windowWidth = Dimensions.get('window').width;
  //const windowHeight = Dimensions.get('window').height;
  const [text, onChangeText] = React.useState("");
  const userInfo = {
    email: '',
    password: '',
  };

  const {email, password} = userInfo;

  const handleonChangetext = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]:value})
  }

  return (
    <View>
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
        <FormContainer>
        <Formik initialValues={userInfo} validationSchema={validationSchema}>
          {({values, errors, handleChange, touched, handleBlur}) => {
            const{email, password}=values
            return <>
            <FormInput 
            error = {touched.email && errors.email}
            onChangeText={handleChange('email')}
            onBlur = {handleBlur('email')}
            autoCapitalize = "none" 
            title='Correo Electrónico' 
            placeholder="petmatch@gmail.com"
            value = {email}
            />
            <FormInput
            error = {touched.password && errors.password}
            onChangeText={handleChange('password')}
            onBlur = {handleBlur('password')}
            autoCapitalize = "none"
            secureTextEntry
            title="Contraseña"
            placeholder="********"
            value = {password}
            />
            <ButtonGradient />
            </>
          }}
        </Formik>
        </FormContainer>

        <View style={styles.buttontext}>
          <Button color={"grey"} title="¿Olvidaste tu contraseña?" />
        </View>
        <Button
          title="No tengo cuenta"
          color={"grey"}
          style={styles.textGrey}
          onPress={() => navigation.navigate("Registrate")}
        />
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 15,
    color: "grey",
    marginTop: 20,
  },

  imgStyle: {
    width: width,
    height: 200,

    alignItems: "center",
    justifyContent: "center",
  },
  imgpic: {
    marginTop: 10,

    width: 250,
    height: 250,
  },
});
