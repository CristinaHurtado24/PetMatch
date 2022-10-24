import * as React from "react";
import * as RN from "react-native";
import { database } from "../config/fb";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import PetCard from "./PetCard";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";

const { width, height } = Dimensions.get("window");

export default Match = () => {
  const navigation = useNavigation();

  const [products, setProducts] = React.useState([]);

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
        }))
      );
    });
    return unsuscribe;
  }, []);

  return (
    <ScrollView>
      {products.map((product) => (
        <PetCard key={product.id} {...product} />
      ))}
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
