import * as React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default Profile = ({ route, navigation }) => {
  const {
    id,
    dogName,
    url,
    email,
    password,
    name,
    lastName,
    phone,
    raza,
    dogAge,
    dogSex,
  } = route.params;

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.imgpic}
        />
        <Text style={styles.person}>Mascota</Text>

        <Text style={styles.textInput}>{dogName}</Text>
        <Text style={styles.textInput}>{raza}</Text>
        <Text style={styles.textInput}> {dogAge}</Text>
        <Text style={styles.textInput}>{dogSex}</Text>

        <Text style={styles.person}>Dueño</Text>
        <Text style={styles.textInput}>{name}</Text>
        <Text style={styles.textInput}>{lastName}</Text>
        <Text style={styles.textInput}>{phone}</Text>
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
    marginTop: 20,
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
