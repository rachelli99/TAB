import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Dimensions,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { NovaFlat_400Regular } from "@expo-google-fonts/dev";

import { Actions } from "react-native-router-flux";

const { width: WIDTH } = Dimensions.get("window");

export default class LogInScreen extends Component {
  signup() {
    Actions.Signup();
  }

  goToHome() {
    Actions.home();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titles}>
          <Text style={styles.title}>Task</Text>
          <Text style={styles.title}>A</Text>
          <Text style={styles.title}>Buddy</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon
            name={"ios-erson-outline"}
            size={28}
            color={"rgba(255, 255, 255, 0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={"Username"}
            placeholderTextColor={"#9F9F9F"}
          />
        </View>

        <View>
          <Icon
            name={"ios-erson-outline"}
            size={28}
            color={"rgba(255, 255, 255, 0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"#9F9F9F"}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={this.goToHome}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.create}>
              Dont't have an account? Create Now
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F9",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titles: {
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 48,
    fontWeight: "500",
    fontFamily: "NovaFlat_400Regular",
    color: "#DCC5A3",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    width: WIDTH - 90,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "#E3E3E3",
    color: "#9F9F9F",
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 37,
  },
  loginButton: {
    backgroundColor: "#E3C393",
    paddingVertical: 10,
    width: WIDTH - 90,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 40,
    borderRadius: 10,
  },
  loginButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  create: {
    color: "#838383",
    textDecorationLine: "underline",
  },
});
