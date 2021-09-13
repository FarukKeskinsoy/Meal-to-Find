import 'react-native-gesture-handler';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React,{useState,useEffect} from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from './src/components/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: "AIzaSyDA7_0Ps-qL-ypM_5TflpkgP0nIjQ1l6po",
  authDomain: "mealstogo-4d03c.firebaseapp.com",
  projectId: "mealstogo-4d03c",
  storageBucket: "mealstogo-4d03c.appspot.com",
  messagingSenderId: "233123880906",
  appId: "1:233123880906:web:f1a6d77466e18dd3277933"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() { 
    
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

  
