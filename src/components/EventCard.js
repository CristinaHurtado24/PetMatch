import * as React from "react";
import Events from "./Events";
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
import { FontAwesome } from "@expo/vector-icons";
import * as Linking from 'expo-linking';
export default EventCard = ({ event, description,dia, icono, ubicacion, precio, url, hora, redes }) => {
  return (
    <View style={styles.all}>
      <View style={styles.cardContainer}>
      
        <Image
          style={styles.imageStyle}
          source={{
            uri: url,
          }}
        ></Image>
        <Text style={styles.iconoe}>{icono}</Text>
        <Text style={styles.name}>{event}</Text>
        <Text style={styles.raza}>{description}</Text>
        <Text style={styles.dia}>Día: {dia}</Text>
        <Text style={styles.dia}>Hora: {hora}</Text>
        <Text style={styles.dia}>Dirección: {ubicacion}</Text>
        <Text style={styles.dia}>Precio de Entrada: {precio}</Text>
        <Text style={styles.info}>Para más información:</Text>

        {/* <FontAwesome
            name="whatsapp"
            size={47}
            color="#941DE8"
            style={styles.icon1}
            onPress={() => {
              const t = {telefono}
              console.log(t)
              Linking.openURL("https://wa.me/" + t);
            }}/> */}

<FontAwesome
            name="instagram"
            size={47}
            color="#941DE8"
            style={styles.icon1}
            onPress={() => {
              const t = redes
              Linking.openURL("https://www.instagram.com/" + t);
            }}/>
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
    width: deviceWidth - 30,
    height: 680,
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
    height: 300,
    width: deviceWidth - 30,
    borderTopRightRadius: radius,
    borderTopLeftRadius: radius,
    resizeMode: "cover",
  },
  title: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    
  },
  icon1: {
    top: -30,
    left: 180,
  },
  iconoe: {
    top: -290,
    left: 320,
    fontSize:50,
  },

  info: {
    marginTop: 20,
    marginLeft: 20,
    color: "#463f3a",
  },

  name: {
    fontSize: 35,
    fontWeight: "600",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: -40,
    color: "#941DE8",
  },

  raza: {
    fontSize:20,
    fontWeight: "400",
    alignSelf: "center",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    justifyContent: "center",
    textAlign: "justify",
  },

  dia: {
    fontSize: 18,
    fontWeight: "400",
    alignSelf: "left",
    marginLeft: 20,
    marginBottom: 5,
    color: "#463f3a",
    //justifyContent: "center",
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
    marginTop: -10,
  },
  margin: {
    marginTop: 50,
  },

  mainContainer: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
