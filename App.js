import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppLoading } from "expo";
import { useState } from "react";
import { useFonts, NovaFlat_400Regular } from "@expo-google-fonts/dev";
import LogInScreen from "./Components/LoginPage.js";
import SignUpScreen from "./Components/SignUpPage.js";
import ProfilePage from "./Components/ProfilePage.js";
import HistoryPage from "./Components/HistoriesPage.js";
import TaskPage from "./Components/TaskPage.js";
import ContactPage from "./Components/ContactPage.js";
import NavBar from './Components/NavBar.js';
import Navigator from "./routes/Home.js";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    NovaFlat_400Regular,
  });

  if(fontsLoaded){
    return (
      <Navigator />
    );
  } else {
    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F9",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    height: 50,
  },
});
