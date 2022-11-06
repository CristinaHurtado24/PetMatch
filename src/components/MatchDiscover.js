import * as React from "react";
import {Alert}from "react-native";
import { database } from "../config/fb";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Searchbar } from "react-native-paper";
import SearchableDropdown from "react-native-searchable-dropdown";

import PetCard from "./PetCard";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";

const { width, height } = Dimensions.get("window");

//Item array for the dropdown
const items = [
  //name key is must.It is to show the text in front
  { id: 1, name: "Raza" },
  { id: 2, name: "Ciudad" },
];
export default Match = () => {
  const navigation = useNavigation();

  const [products, setProducts] = React.useState([]);
  const [productsA, setProductsA] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchFilter, setSearchFilter] = React.useState("");

  const onChangeFilter = (selected) => {
    setSearchFilter(selected.id);
    console.log("Filter id");
    console.log(searchFilter);
  };
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    console.log(searchQuery)
    const helper = [];
    if (searchQuery != "" && searchFilter != "") {
      if (searchFilter == 1) {
        //Busca por raza
        for (let index = 0; index < products.length; index++) {
          const element = products[index];
          if (element.raza === searchQuery) {
            helper.push(element);
          }
        }
      } else {
        //Busca por ciudad
      }
      setProductsA(helper)
    } else if (searchFilter == "") {
      Alert.alert("Seleccione un filtro");}
  };

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
    <>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          icon="magnify"
          style={styles.searchbar}
        />
        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={onChangeFilter}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: "#ccc",
            backgroundColor: "#FAF7F6",
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: "#FAF9F8",
            borderColor: "#bbb",
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: "#222",
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: "60%",
          }}
          items={items}
          placeholder="Filtro"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
        />
      </View>
      {productsA.length!=0?
         <ScrollView>
          {productsA.map((product) => (
            <PetCard key={product.id} {...product} />
          ))}
        </ScrollView>
      :
        <ScrollView>
          {products.map((product) => (
            <PetCard key={product.id} {...product} />
          ))}
        </ScrollView>
      }
    </>
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
  search: {
    flexDirection: "row",
  },
  searchbar: {
    width: 350,
  },
});
