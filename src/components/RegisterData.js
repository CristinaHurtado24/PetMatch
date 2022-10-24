import * as React from "react";
import * as RN from "react-native";
import { useNavigation } from "@react-navigation/native";
import { database, auth } from "../config/fb";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import DogDataButton from "./DogDataButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default RegisterData = () => {
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, newItem.email, newItem.password)
      .then((userCredential) => {
        console.log("Account created!");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("SingIn");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const [newItem, setNewItem] = React.useState({
    name: "",
    lastName: "",
    email: "predef",
    password: "",
    phone: "",
    dogName: "",
    raza: "",
    dogAge: "",
    dogSex: "",
    url: "https://s1.eestatic.com/2022/04/05/actualidad/662693884_223269248_1024x576.jpg",
  });

  const onSend = async () => {
    await addDoc(collection(database, "products"), newItem);
    //navigation.goBack();
    handleCreateAccount();
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.mainContainer}
      scrollEnabled
    >
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.inputGroup}>
          <Image
            source={{
              uri: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
            }}
            style={styles.imgpic}
          />
          <Text style={styles.titulo}>Registro Dueño</Text>
          <Text style={styles.subTitle}>Complete los campos</Text>

          <Text style={styles.campos}>Nombre</Text>
          <TextInput
            placeholder="Rosa"
            style={styles.textInput}
            onChangeText={(text) => setNewItem({ ...newItem, name: text })}
          />

          <Text style={styles.campos}>Apellido</Text>
          <TextInput
            placeholder="Meltrozo"
            style={styles.textInput}
            onChangeText={(text) => setNewItem({ ...newItem, lastName: text })}
          />

          <Text style={styles.campos}>Correo</Text>
          <TextInput
            placeholder="Petmatch@gmail.com"
            style={styles.textInput}
            onChangeText={(text) => setNewItem({ ...newItem, email: text })}
          />

          <Text style={styles.campos}>Contraseña</Text>
          <TextInput
            placeholder="1234"
            style={styles.textInput}
            onChangeText={(text) => setNewItem({ ...newItem, password: text })}
          />

          <Text style={styles.campos}>Telefono</Text>
          <TextInput
            placeholder="+58 4129993067"
            style={styles.textInput}
            onChangeText={(text) => setNewItem({ ...newItem, phone: text })}
          />

          <Text style={styles.titulo}>Registro Mascota</Text>
          <Text style={styles.subTitle}>Complete los campos</Text>

          <Text style={styles.campos}>Nombre</Text>
          <TextInput
            placeholder="Rosa"
            style={styles.textInput}
            onChangeText={(text) => setNewItem({ ...newItem, dogName: text })}
          />

          <Text style={styles.campos}>Raza</Text>
          <TextInput
            placeholder="Pitbull"
            style={styles.textInput}
            onChangeText={(text) => setNewItem({ ...newItem, raza: text })}
          />

          <Text style={styles.campos}>Edad</Text>
          <TextInput
            placeholder="9"
            style={styles.textInput}
            onChangeText={(text) => setNewItem({ ...newItem, dogAge: text })}
          />

          <Text style={styles.campos}>Sexo</Text>
          <TextInput
            placeholder="Macho"
            style={styles.textInput}
            onChangeText={(text) => setNewItem({ ...newItem, dogSex: text })}
          />

          <Text style={styles.campos}>url</Text>
          <TextInput
            placeholder="url"
            style={styles.textInput}
            onChangeText={(text) => setNewItem({ ...newItem, url: text })}
          />

          <View>
            <TouchableOpacity
              style={styles.container3}
              //onPress={() => navigation.navigate("Onboarding")}
              onPress={onSend}
            >
              <LinearGradient
                // Button Linear Gradient
                colors={["#941DE8", "#C691EB"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
              >
                <Text style={styles.text}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    padding: 35,
    backgroundColor: "#fff",
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 55,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    alignItems: "center",
  },
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 40,
    fontWeight: "bold",
    color: "#34434D",
    marginTop: 10,
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
