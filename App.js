import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, BackHandler } from "react-native";
import Onboarding from "./src/components/Onboarding.js";
import LandingRegister from "./src/components/LandingRegister.js";
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
import { useRoute } from "@react-navigation/native";
import Events from "./src/components/Events.js";
import EventCard from "./src/components/EventCard.js";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  const route = useRoute();
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
          title: "Buscar",
          headerBackVisible: false,
          tabBarIcon: (tabInfo) => (
            <AntDesign name="home" size={35} color="#941DE8" />
          ),
        }}
        initialParams={{ userEmail: route.params.userEmail }}
      />
      <Tab.Screen
        name="Match"
        component={Match}
        options={{
          headerShown: true,
          title: "Match",
          headerBackVisible: false,
          tabBarIcon: (tabInfo) => (
            <AntDesign name="hearto" size={35} color="#941DE8" />
          ),
        }}
        initialParams={{ userEmail: route.params.userEmail }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          headerShown: true,
          title: "Anuncios",
          headerBackVisible: false,
          tabBarIcon: (tabInfo) => (
            <AntDesign name="notification" size={35} color="#941DE8" />
          ),
        }}
        initialParams={{ userEmail: route.params.userEmail }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          title: "Perfil",
          headerBackVisible: false,
          tabBarIcon: (tabInfo) => (
            <AntDesign name="user" size={35} color="#941DE8" />
          ),
        }}
        initialParams={{ userEmail: route.params.userEmail }}
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
