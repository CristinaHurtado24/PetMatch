import * as React from "react";
import * as RN from "react-native";
import { database } from "../config/fb";
import { AntDesign } from "@expo/vector-icons";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  doc,
} from "firebase/firestore";
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
import BatchedBridge from "react-native/Libraries/BatchedBridge/BatchedBridge";
//import database from "../config/fb"

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
          sent: doc.data().sent,
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

  function buscar2(email) {
    for (let index = 0; index < products.length; index++) {
      const elements = products[index];
      //console.log("entra");
      //console.log(elements);
      if (route.params.userEmail === elements.email) {
        var userprofmatch = elements;
        console.log(userprofmatch);
        //setProductsA(element);
        userprofmatch.sent.push(email);
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

  const navigation = useNavigation();
  const collectionRef = collection(database, "products");
  const onSend = async () => {
    console.log("pasaaaaaaa");
    await updateDoc(collection(database, "products", "7UVpezxDSSISWRebNrCr"), {
      phone: "123",
    });
    //navigation.goBack();
  };

  async function actualizar2(b) {
    //const f = "Andrea@gmail.com"
    const uniqueId = b.uid;
    const usuariosRef = doc(collection(database, "products"), uniqueId);
    await updateDoc(usuariosRef, { sent: b.sent });
  }

  return (
    <View style={styles.all}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={{ uri: url }}></Image>
        <Text style={styles.name}>{dogName}</Text>
        <Text style={styles.raza}>{raza}</Text>
        <View style={styles.icons}>
          <AntDesign
            name="heart"
            size={50}
            color="#941DE8"
            onPress={() => {
              Alert.alert("Enviada la solicitud");
              console.log(email);
              //console.log(b);
              const a = buscar(email);
              //const b = buscar2(email)
              //actualizar2(b);
              //match.push(userprof);
              //console.log(match)
              //{onSend}
              //const uniqueId = a.id;
              console.log("*******");
              //console.log(uniqueId);
              console.log("*******");
              actualizar(a);
              //actualizar_2(b);

              async function actualizar(a) {
                const uniqueId = a.uid;
                console.log(`#####&&& props.id: ${uniqueId}`);
                const usuariosRef = doc(
                  collection(database, "products"),
                  uniqueId
                );
                await updateDoc(usuariosRef, { requests: a.requests });
              }

              //async function actualizar_2(b) {
              //const uniqueId = b.uid;
              //const usuariosRef = doc(collection(database, "products"), uniqueId)
              //await updateDoc(usuariosRef, { sent: b.sent });}
              //console.log(a.id)
              //DocumentReference docRef = db.collection("cities").document("DC");
              // await database.collection("products").doc(uniqueId).update(
              //   {
              //     id : a.id,
              //     name : a.name,
              //     lastName : a.lastName,
              //     email: a.email,
              //     password: a.password,
              //     phone: a.password,
              //     dogName: a.dogName,
              //     raza: a.raza,
              //     dogAge: a.dogAge,
              //     dogSex: a.dogSex,
              //     url: a.url,
              //     requests: a.requests,
              //   }
              //)
            }}
          />
          <AntDesign
            name="infocirlceo"
            size={50}
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
    height: 600,
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
    marginBottom: 30,
    marginTop: 30,
    marginHorizontal: 10,
    alignself: "center",
  },
  imageStyle: {
    height: 450,
    width: deviceWidth - 70,
    borderTopRightRadius: radius,
    borderTopLeftRadius: radius,
    resizeMode: "cover",
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
  },

  name: {
    fontSize: 40,
    fontWeight: "600",
    alignSelf: "center",
  },

  raza: {
    fontSize: 20,
    fontWeight: "400",
    alignSelf: "center",
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  icons2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 55,
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
});
