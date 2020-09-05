import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from "./ProfilePage.js";
import HistoryPage from "./HistoriesPage.js";
import TaskPage from "./TaskPage.js";
import ContactPage from "./ContactPage.js";

const Tab = createBottomTabNavigator();
export default class NavBar extends Component {
  render() {
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