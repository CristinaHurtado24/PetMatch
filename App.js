import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Onboarding from "./src/components/Onboarding.js";
import HomeScreen from "./src/pages/HomeScreen.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native-web";

const Loading=()=>{
  <View>
    <ActivityIndicator size='large'/>
  </View>
}

export default function App() {
  // const [loading, setLoading] = useState(true);
  // const [viewedOnboarding, setViewedOnboarding] = useState(false);

  // const checkOnboarding = async()=> {
  //   try {
  //     const value = await AsyncStorage.getItem('@viewedOnboarding');

  //     if (value !== null) {
  //       setViewedOnboarding(true)
  //     }
  //   } catch (error) {
  //     console.log('Error @checkOnboarding: ', err)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // useEffect(()=>{
  //   checkOnboarding();
  // },[])
  return (
    <View style={styles.container}>
      <Onboarding/>
      {/* {loading ? <Loading /> : viewedOnboarding ? <HomeScreen/> : <Onboarding/>} */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
