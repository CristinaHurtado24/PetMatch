import * as React from "react";
import { database } from "../config/fb";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default Profile = ({ navigation }) => {
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

  console.log(products);
  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
          }}
          style={styles.imgpic}
        />

        <Text style={styles.person}>Mascota</Text>

        <Text style={styles.textInput}>Nombre Mascota</Text>
        <Text style={styles.textInput}>Raza</Text>
        <Text style={styles.textInput}>Edad</Text>
        <Text style={styles.textInput}>Sexo</Text>

        <Text style={styles.person}>Dueño</Text>
        <Text style={styles.textInput}>Nombre Dueño</Text>
        <Text style={styles.textInput}>Apellido</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
  },

  textshadow: {
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingStart: 30,
    paddingEnd: 30,
    width: "80%",
    height: 50,
    marginTop: 5,
  },
  person: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  image: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
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
  imgpic: {
    marginTop: 10,
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 70,
  },
  textInput: {
    borderWidth: 1,
    fontSize: 20,
    borderColor: "black",
    backgroundColor: "#fff",
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 15,
    borderRadius: 25,
  },
});
