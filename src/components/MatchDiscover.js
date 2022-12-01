import * as React from "react";
import { Alert } from "react-native";
import { database } from "../config/fb";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Searchbar } from "react-native-paper";
import SearchableDropdown from "react-native-searchable-dropdown";
import { useRoute } from "@react-navigation/native";

import PetCard from "./PetCard";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
//import { black, white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export default Match = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [products, setProducts] = React.useState([]);
  const [productsA, setProductsA] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    console.log(searchQuery);
    const helper = [];
    if (searchQuery != "") {
      //Busca por raza
      for (let index = 0; index < products.length; index++) {
        const element = products[index];
        if (element.raza === searchQuery && element.email != route.params.userEmail) {
          helper.push(element);
        }
      setProductsA(helper);
    }
  };}

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
          sent: doc.data().sent, 
        }))
      );
    });
    return unsuscribe;
  }, []);
  

  function listanueva(products) {
    var elements = [];

    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      if (element.email != route.params.userEmail){
      elements.push(products[index])}
    }


      for (let index = 0; index < products.length; index++) {
        const element = products[index];
        if (element.email === route.params.userEmail) {
          for (let index = 0; index < element.sent.length; index++) {
            const elements2 = element.sent[index];
              if (element.email != elements2 && element.email != route.params.userEmail) {
                userprofmatch.push(element);
            }
          }
        }
        break;
      }
      //console.log("entra");
      //console.log(elements);
      //for (let j = 0; j < x.length; j++) {}
      //for (let i = 0; i < elements.length; i++) {
        // if (elements.email != route.params.userEmail) {
        //   userprofmatch.push(elements)
        //   console.log("ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd")
        return elements;}  

  return (
    <>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          icon="magnify"
          style={styles.searchbar}
        />
      </View>
      {productsA.length != 0 ? (
        <ScrollView>
          {productsA.map((product) => (
            <PetCard
              key={product.id}
              {...product}
              initialParams={{ userEmail: route.params.userEmail }}
            />
          ))}
        </ScrollView>
      ) : (
        <ScrollView>
          {listanueva(products).map((product) => (
            <PetCard key={product.id} {...product} />
          ))}
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#493d8a",
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
    color: "#941DE8",
    textAlign: "center",
    paddingHorizontal: 64,
    fontSize: 18,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#941DE8",
    borderRadius: 10,
    marginTop: 15,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  search: {
    flexDirection: "row",
    justifyContent:'center' 
  },
  searchbar: {
    width: 400,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 30,
  },
});
