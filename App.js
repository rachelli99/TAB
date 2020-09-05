import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useFonts, NovaFlat_400Regular } from "@expo-google-fonts/dev";
import LogInScreen from './Components/LoginPage.js';
import SignUpScreen from './Components/SignUpPage.js';
import ProfilePage from './Components/ProfilePage.js';
import HistoryPage from './Components/HistoriesPage.js';
import TaskPage from './Components/TaskPage.js';
import ContactPage from './Components/ContactPage.js';
import Navigator from './routes/Home.js';

/*
import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Login: LogInScreen,
  Home: SignUpScreen
})
*/

export default function App() {
  const [fontsLoaded] = useFonts({
    NovaFlat_400Regular,
  });

  if(fontsLoaded){
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <HistoryPage />
        </View>
      </NavigationContainer> 
    );
  }
  else{
    return (
      <AppLoading />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
