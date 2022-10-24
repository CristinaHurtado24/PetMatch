import * as React from "react";
import * as RN from "react-native";
import { database } from "../config/fb";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
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
  return (
    <View style={styles.cardContainer}>
      <TouchableHighlight
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
      >
        <Image style={styles.imageStyle} source={{ uri: url }}></Image>
      </TouchableHighlight>
      <Text style={styles.name}>{dogName}</Text>
      <View style={styles.icons}>
        <AntDesign
          name="heart"
          size={50}
          color="#1C1A19"
          onPress={() => {
            Alert.alert("Hacer match");
          }}
        />
        <AntDesign
          name="close"
          size={50}
          color="#1C1A19"
          onPress={() => {
            Alert.alert("Eliminar");
          }}
        />
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const radius = 20;

const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 20,
    height: 500,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#Grey",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.7,
    elevation: 2,
    shadowRadius: 5,
    marginBottom: 15,
    marginTop: 15,
    marginHorizontal: 10,
  },
  imageStyle: {
    height: 370,
    width: deviceWidth - 20,
    borderTopRightRadius: radius,
    borderTopLeftRadius: radius,
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
