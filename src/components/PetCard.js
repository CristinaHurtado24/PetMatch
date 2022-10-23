import React from "react";
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
const users = [
  {
    name: "Tobby",
    avatar:
      "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-que-sabes-de-los-perros-poodle_0.jpg?itok=BA9kq-Fz",
  },
  {
    name: "Jagger",
    avatar:
      "https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal_recorte1.jpg",
  },
  {
    name: "Sasha",
    avatar:
      "https://www.ngenespanol.com/wp-content/uploads/2022/08/estudio-ayuda-a-conocer-origen-de-los-perros.jpg",
  },
  {
    name: "Roca",
    avatar:
      "https://estaticos.muyinteresante.es/uploads/images/article/62cfb46c5cafe8b3a50cffb6/perros.populares.jpg",
  },
  {
    name: "Manchas",
    avatar:
      "https://media.traveler.es/photos/613760adcb06ad0f20e11980/master/w_1600%2Cc_limit/202931.jpg",
  },
  {
    name: "Honney",
    avatar:
      "https://s1.eestatic.com/2022/04/05/actualidad/662693884_223269248_1024x576.jpg",
  },
];

export default PetCard = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      {users.map((u, i) => {
        return (
          <View key={i} style={styles.cardContainer}>
            <TouchableHighlight
              onPress={() =>
                navigation.navigate("ProfileMatch", {
                  name: u.name,
                  url: u.avatar,
                })
              }
            >
              <Image
                style={styles.imageStyle}
                source={{ uri: u.avatar }}
              ></Image>
            </TouchableHighlight>
            <Text style={styles.name}>{u.name}</Text>
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
      })}
    </ScrollView>
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
