import * as React from "react";
import PetCard from "./PetCardMatch";

import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import { database } from "../config/fb";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Button,
} from "firebase/firestore";
import { useRoute } from "@react-navigation/native";
import * as Linking from "expo-linking";
const { width, height } = Dimensions.get("window");

export default Match = () => {
  const route = useRoute();
  const [products, setProducts] = React.useState([]);
  var helper = [];
  let result = [];
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

  console.log(route.params.userEmail);

  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    if (element.email === route.params.userEmail) {
      for (let index = 0; index < element.requests.length; index++) {
        const element2 = element.requests[index];

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

      result = helper.filter((item,index)=>{
        return helper.indexOf(item) === index;
      })
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {result.map((product) => (
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
