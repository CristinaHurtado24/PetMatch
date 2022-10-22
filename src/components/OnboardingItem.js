import React from "react";

import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image source={{ uri: item.image }} style={styles.imgpic} />

      <View style={[styles.info, { flex: 0.3 }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#941DE8",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
    marginTop:10
  },
  info:{
    marginTop:20
  },
  imgpic: {
    marginTop: 50,
    width: 300,
    height: 400,
    marginBottom: 10,
    borderRadius: 30,
  },
});
