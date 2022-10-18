import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Onboarding from "./src/components/Onboarding.js";
import RegisterOwner from "./src/components/RegisterOwner";
import HomeScreen from "./src/pages/HomeScreen.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Loading=()=>{
  <View>
    <ActivityIndicator size='large'/>
  </View>
}
const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="RegisterOwner"
          component={RegisterOwner}
          options={{ title: "Register" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Onboarding/>
    //   {/* {loading ? <Loading /> : viewedOnboarding ? <HomeScreen/> : <Onboarding/>} */}
    //   <StatusBar style="auto" />
    // </View>
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
