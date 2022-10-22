//const express = require('express');
//const app = express();

//Settings
// app.set('port', process.env.PORT || 3000)






// //Starting the server
// app.listen(app.get('port'), () => {
//   console.log('port is listening');
// })

// const app = express();

// const User = require('./models/User')

//const email = 'example'
// app.post('/create-user', async (res,res) => {
//  const is NewUser = await User.isthisEmailInUse(email)
// if (!isNewUser) return res.json({success: false, message: "Este email esta en uso"})
//   const user = await User({
//  email:email,
//});
//   await user.save();
//   res.json(user);
// })

// app.get('/', (req, res) => {
//     res.send('Hello')
// })

//require('./models/db');

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import Onboarding from "./src/components/Onboarding.js";
import LandingRegister from "./src/components/LandingRegister.js";

import ButtonGradient from "./src/components/ButtonGradient.js";
import SingIn from "./src/components/SingIn";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Registrate() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={LandingRegister}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SingIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registrate"
          component={Registrate}
          options={{ headerBackTitle: "Back" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
