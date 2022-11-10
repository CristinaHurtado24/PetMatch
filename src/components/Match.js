import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonGradient from "./ButtonGradient";
import PetCard from "./PetCardMatch";

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
  ScrollView,
} from "react-native";
import { NativeScreenNavigationContainer } from "react-native-screens";
import { useNavigation } from "@react-navigation/native";
import { database } from "../config/fb";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useRoute } from "@react-navigation/native";
import { Routes } from "react-router-native";

const { width, height } = Dimensions.get("window");

export default Match = ({ navigation }) => {
  const route = useRoute();
  const [products, setProducts] = React.useState([]);
  var userprof = "";
  var helper = [];
  const [productsA, setProductsA] = React.useState([]);

  React.useEffect(() => {
    const collectionRef = collection(database, "products");
    const q = query(collectionRef, orderBy("name", "desc"));

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          email: doc.data().email,
          password: doc.data().password,
          name: doc.data().name,
          lastName: doc.data().lastName,
          dogName: doc.data().dogName,
          url: doc.data().url,
          phone: doc.data().phone,
          raza: doc.data().raza,
          dogAge: doc.data().dogAge,
          dogSex: doc.data().dogSex,
          requests: doc.data().requests,
        }))
      );
    });
    return unsuscribe;
  }, []);

  //console.log(products);
  console.log(route.params.userEmail);

  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    if (element.email === route.params.userEmail) {
      for (let index = 0; index < element.requests.length; index++) {
        const element2 = element.requests[index];
        console.log("+++++++++++");
        //console.log(element2);
        //helper.push(element2);

        console.log("+++++++++++");
        for (let index = 0; index < products.length; index++) {
          const element3 = products[index];
          if (element3.email === element2) {
            helper.push(element3);
          }
        }
      }
      console.log("&&&&&&&&&&&&&&");
      console.log("&&&&&&&&&&&&&&");
      console.log("&&&&&&&&&&&&&&");
      console.log("&&&&&&&&&&&&&&");
      console.log(helper);
      console.log("&&&&&&&&&&&&&&");
      console.log("&&&&&&&&&&&&&&");
      console.log("&&&&&&&&&&&&&&");
      console.log("&&&&&&&&&&&&&&");
    }

    // for (let index = 0; index < element.requests.length; index++) {
    //   const element2 = element.requests[index];
    //   if (element2 === route.params.userEmail) {
    //     console.log("se encontro perra");
    //     console.log("*******");
    //     console.log("*******");
    //     console.log(element);
    //     helper.push(element);

    //     console.log("*******");
    //     console.log("*******");
    //   }
    // }
  }
  //setProductsA(helper);

  return (
    <ScrollView>
      <View style={styles.container}>
        {helper.map((product) => (
          <PetCard key={product.id} {...product} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.65,
    marginTop: 40,
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
});
