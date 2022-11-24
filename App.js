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
import ProfileMatch from "./src/components/ProfileMatch.js";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MatchDiscover from "./src/components/MatchDiscover.js";

import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{ showIcon: true, showLabel: false }}
      screenOptions={{
        headerStyle: { backgroundColor: "#941DE8" },

        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 30,
        },
      }}
    >
      <Tab.Screen
        name="MatchDiscover"
        component={MatchDiscover}
        options={{
          headerShown: true,
          title: "Discover",
          headerBackVisible: false,
          tabBarIcon: (tabInfo) => (
            <AntDesign name="home" size={35} color="#941DE8" />
          ),
        }}
      />
      <Tab.Screen
        name="Match"
        component={Match}
        options={{
          headerShown: true,
          title: "Match",
          headerBackVisible: false,
          tabBarIcon: (tabInfo) => (
            <AntDesign name="hearto" size={35} color="#1C1A19" />
          ),
        }}
      /> 
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          title: "Profile",
          headerBackVisible: false,
          tabBarIcon: (tabInfo) => (
            <AntDesign name="user" size={35} color="#1C1A19" />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Onboarding}
        screenOptions={{
          headerStyle: { backgroundColor: "#941DE8" },

          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 30,
          },
        }}
      >
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
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
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
        <Stack.Screen
          name="ProfileMatch"
          component={ProfileMatch}
          options={{
            headerShown: true,
            gestureEnabled: true,
            title: "Perfil Mascota",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
