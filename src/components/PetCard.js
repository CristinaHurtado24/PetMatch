import * as React from "react";
import * as RN from "react-native";
import { database } from "../config/fb";
import {
  deleteDoc,
  doc,
  collection,
  Firestore,
  updateDoc,
} from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";

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
}) => {
  const navigation = useNavigation();
  const collectionRef = collection(database, "products");
  const onSend = async () => {
    console.log("pasaaaaaaa");
    await updateDoc(collection(database, "products", "7UVpezxDSSISWRebNrCr"), {
      phone: "123",
    });
    //navigation.goBack();
  };

  return (
    <View style={styles.all}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={{ uri: url }}></Image>
        <Text style={styles.name}>{dogName}</Text>
        <Text style={styles.raza}>{raza}</Text>
        <View style={styles.icons}>
          <AntDesign name="heart" size={50} color="#941DE8" onPress={onSend} />
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
