import * as React from "react";

import { StyleSheet, View, Dimensions, ScrollView, Text } from "react-native";

import EventCard from "./EventCard";
const { width, height } = Dimensions.get("window");

export default Event = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <EventCard
          event={"Día de Piscina"}
          description={
            "Trae a tu mascota el próximo sábado a la piscina de la UNIMET!, disfruta de un día soleado con la mejor compañía."
          }
          dia = {"02-01-2023"}
          hora = {"10:30am - 4:00pm"}
          ubicacion = {"Ditribuidor metropolitano Caracas, 1060, Miranda"}
          precio = {"Entrada Libre"}
          icono = {"🌞"}
          redes = {"fceunimet"}
          url={
            "https://www.sun-sentinel.com/resizer/0NvrNUi7nGgVqzoN45Ea0asLvfU=/1200x630/filters:format(jpg):quality(70)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/AACBLTQERNDSRO4BCUHAQLKQJM.jpg"
          }
        ></EventCard>
        <EventCard
          event={"Pet-SPA"}
          description={"Tu mascota también necesita relajarse, regálale un día especial a tu perro y déjalo en buenas manos"}
          dia = {"02-03-2023"}
          hora = {"10:00am - 6:00pm"}
          ubicacion = {"Aranda Av. la Facultad, Caracas 1041, Distrito Capital"}
          precio = {"$20"}
          icono = {"💅 "}
          redes = {"cesarpetspa"}
          url={
            "https://www.crushpixel.com/big-static18/preview4/dog-spa-wellness-2970743.jpg"
          }
        ></EventCard>

<EventCard
          event={"Fiesta de Disfraces"}
          description={
            "Llegó la Hora Loca, es momento de que tu mascota y tú disfruten de una tarde llena de música y diversión."}
          dia = {"05-04-2023"}
          hora = {"3:00pm - 7:00pm"}
          ubicacion = {"Caracas 1010, Distrito Capital, Venezuela"}
          precio = {"$10"}
          icono = {"🥸"}
          redes = {"petfriendlyccs"}
          url={
            "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-como-disfrazar-a-un-perro-y-que-se-sienta-comodo.jpg?itok=eVZwa4hX"
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
