import { View, Text, Image, StyleSheet, useWindowDimensions, Button, Alert } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";

export default function RegisterOwner() {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, width, height]}>
      <View>
        <Image
          style={styles.imgpic}
          source={require("../imgs/PHOTO-2022-10-09-23-15-53.jpg")}
        />
      </View>
      <Text style={styles.title}>Registrate para continuar</Text>
      <View style={styles.button}>
        <Button
          onPress={() => {
            Alert.alert("Nice");
          }}
          title="Continua con email"
          color="#ffff"
        />
      </View>
      <Text style={styles.text}>O registrate con</Text>
      <View style={styles.options}>
        <AntDesign
          name="twitter"
          size={40}
          color="#941DE8"
          onPress={() => {
            Alert.alert("Inicio con Twitter");
          }}
        />
        <AntDesign
          name="google"
          size={40}
          color="#941DE8"
          onPress={() => {
            Alert.alert("Inicio con google");
          }}
        />
        <AntDesign
          name="facebook-square"
          size={40}
          color="#941DE8"
          onPress={() => {
            Alert.alert("Inicio con Facebook");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  imgpic: {
    marginTop: 10,
    alignSelf: "center",
    width: 300,
    height: 300,
  },
  title: {
    fontWeight: "600",
    fontSize: 22,
    marginBottom: 10,
    marginTop: 20,
    color: "black",
    textAlign: "center",
  },
  text: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
    fontSize: 18,
    marginTop: 30,
    marginBottom:30
  },
  button: {
    backgroundColor: "#941DE8",
    borderRadius: 10,
    marginTop: 15,
    width: 300,
    alignSelf:'center'
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
});
