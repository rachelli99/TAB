import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
// import 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import { useState } from "react";
import { useFonts, NovaFlat_400Regular } from "@expo-google-fonts/dev";
import LogInScreen from "./Components/LoginPage.js";
import SignUpScreen from "./Components/SignUpPage.js";
import ProfilePage from "./Components/ProfilePage.js";
import HistoryPage from "./Components/HistoriesPage.js";
import TaskPage from "./Components/TaskPage.js";
import ContactPage from "./Components/ContactPage.js";
import Navigator from "./routes/Home.js";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    NovaFlat_400Regular,
  });

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;

              if (route.name === "Profile") {
                iconName = "logo-freebsd-devil";
              } else if (route.name === "Task") {
                iconName = "ios-nutrition";
              } else if (route.name === "History") {
                iconName = focused ? "ios-list-box" : "ios-list";
              } else if (route.name === "Contacts") {
                iconName = "ios-planet";
              }

              return <Ionicons name={iconName} size={40} color={color} />;
            },
          })}
          tabBarOptions={{
            labelStyle: {fontSize: 14, paddingBottom: 5},
            style:{height:100, paddingTop: 8},
            activeTintColor: "#DCC5A3",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Contacts"
            component={ContactPage}
          />
          <Tab.Screen name="Task" component={TaskPage} />
          <Tab.Screen name="History" component={HistoryPage} />
          <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
      </NavigationContainer> 
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
