import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, BackHandler } from "react-native";
import Onboarding from "./src/components/Onboarding.js";
import LandingRegister from "./src/components/LandingRegister.js";

import ButtonGradient from "./src/components/ButtonGradient.js";
import SingIn from "./src/components/SingIn";
import RegisterData from "./src/components/RegisterData.js";
import Match from "./src/components/Match.js";
import Profile from "./src/components/Profile.js";
import DogData from "./src/components/DogData.js";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MatchDiscover from "./src/components/MatchDiscover.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MatchDiscover"
        component={MatchDiscover}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Match"
        component={Match}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Onboarding}>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SingIn"
          component={SingIn}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LandingRegister"
          component={LandingRegister}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, gestureEnabled: true }}
        />

        <Stack.Screen
          name="RegisterData"
          component={RegisterData}
          options={{ headerShown: false, gestureEnabled: true }}
        />
        <Stack.Screen
          name="DogData"
          component={DogData}
          options={{ headerShown: false, gestureEnabled: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
