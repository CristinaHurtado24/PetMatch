import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { database } from "../config/fb";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import {
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  doc,
  collection,
} from "firebase/firestore";

export default PetCard = ({
  id,
  name,
  lastName,
  email,
  password,
  phone,
  dogName,
  raza,
  dogAge,
  dogSex,
  url,
  requests,
}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [products, setProducts] = React.useState([]);
  var userprof = "";
  const [productsA, setProductsA] = React.useState([]);

  React.useEffect(() => {
    const collectionRef = collection(database, "products");
    const q = query(collectionRef, orderBy("name", "desc"));

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({
          uid: doc.data().uid,
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
          //match: doc.data().match,
          requests: doc.data().requests,
        }))
      );
    });
    return unsuscribe;
  }, []);

  console.log(products);

  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log("entra");
    console.log(element);
    if (element.email === route.params.userEmail) {
      console.log("**************");
      console.log(route.params.userEmail);
      console.log("**************");
      var userprof = element;
      console.log(userprof);
      //setProductsA(element);
    }
  }

  function buscar(email) {
    for (let index = 0; index < products.length; index++) {
      const elements = products[index];
      //console.log("entra");
      //console.log(elements);
      if (email === elements.email) {
        var userprofmatch = elements;
        console.log(userprofmatch);
        //setProductsA(element);
        userprofmatch.requests.push(userprof.email);
        console.log(userprofmatch);
        //ref.set(userprofmatch)
        console.log("jjjjjjjjjjj");
        //console.log(database)
        //const uniqueId = userprofmatch.id;
        //await database.collection("products").doc(uniqueId).update()
      }
    }
    return userprofmatch;
  }

  return (
    <View style={styles.all}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={{ uri: url }}></Image>
      <Text style={styles.name}>{dogName}</Text>
      <Text style={styles.raza}>{raza}</Text>
      <View style={styles.icons}>
        <AntDesign
          name="phone"
          size={40}
          color="#941DE8"
          style={styles.icon1}
          onPress={() => {
            console.log(email);
            const a = buscar(email);
            const t = a.phone;
            Alert.alert(t);
              }
            }
          />
          <AntDesign
            name="infocirlceo"
            size={40}
            color="#941DE8"
            onPress={() =>
              navigation.navigate("ProfileMatch", {
                dogName: dogName,
                url: url,
                email: email,
                password: password,
                name: name,
                lastName: lastName,
                dogName: dogName,
                url: url,
                phone: phone,
                raza: raza,
                dogAge: dogAge,
                dogSex: dogSex,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 20;

const styles = StyleSheet.create({
  all: {
    alignSelf: "center",
  },

  cardContainer: {
    width: deviceWidth - 70,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#Grey",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    elevation: 2,
    shadowRadius: 5,
    marginBottom: 5,
    marginTop: 30,
    marginHorizontal: 10,
    alignself: "center",
  },
  imageStyle: {
    height: 200,
    width: deviceWidth-230,
    //borderTopRightRadius: radius,
    borderTopLeftRadius: radius,
    //borderBottomEndRadius: radius,
    borderBottomStartRadius: radius,
    resizeMode: "cover",
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },

  name: {
    fontSize: 30,
    fontWeight: "600",
    alignSelf: "center",
    top: -160,
    right: -90,
  },

  raza: {
    fontSize: 20,
    fontWeight: "400",
    alignSelf: "center",
    top: -160,
    right: -90,
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 120,
    marginTop: 10,
    top: -140,
    right: -140,
    width: 40,
  },

  icon1 : {
    right: 40,
  },

  icons2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 55,
    top: -160,
    right: -70,
  },
  filter: {
    backgroundColor: "#941DE8",
    height: 120,
    width: deviceWidth,
    borderRadius: 30,
    marginTop: -20,
  },
  margin: {
    marginTop: 30,
  },

  mainContainer: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
