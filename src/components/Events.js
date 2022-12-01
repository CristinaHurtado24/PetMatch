import * as React from "react";

import { StyleSheet, View, Dimensions, ScrollView, Text } from "react-native";

import EventCard from "./EventCard";
const { width, height } = Dimensions.get("window");

export default Event = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <EventCard
          event={"Día de piscina"}
          description={
            "Trae a tu mascota el proximo sabado a la piscina de la UNIMET!"
          }
          url={
            "https://www.sun-sentinel.com/resizer/0NvrNUi7nGgVqzoN45Ea0asLvfU=/1200x630/filters:format(jpg):quality(70)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/AACBLTQERNDSRO4BCUHAQLKQJM.jpg"
          }
        ></EventCard>
        <EventCard
          event={"Dia de reproduccion"}
          description={"Reproduciste💋"}
          url={
            "https://www.mundoperros.es/wp-content/uploads/2012/11/apareamiento_de_perros.jpg"
          }
        ></EventCard>
      </View>
    </ScrollView>
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
});
