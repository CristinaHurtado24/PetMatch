import React, { createContext, useContext } from 'react';
import {View, Text} from 'react-native';
import * as Google from "expo-google-app-auth";

const AuthContext = createContext({});

const config = {
  iosClientId: '3352181963-t89fq2jons8m4h5f1ma5ubv0cv40ej6h.apps.googleusercontent.com',
  scopes: ["profile", "email"],
  Permissions: ["public_profile", "email", "gender", "location"],
}

export const AuthProvider = ({children})=> {

  const signInWithGoogle = async() => {
    await Google.logInAsync(config).then(async (LogInResult) =>{
      if(LogInResult.type === 'success'){
        // login ...
      }

    });
  }

  return (
    <AuthContext.Provider value={{
      user: "Sonny",
      signInWithGoogle,
      }}>
        {children}
    </AuthContext.Provider>
  )
}

export default function UseAuth() {
    return useContext(AuthContext);
}