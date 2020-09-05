import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Alert,
  Platform,
  Dimensions,
} from "react-native";
import { NovaFlat_400Regular } from "@expo-google-fonts/dev";

function Header(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.title_name}>{props.title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titles: {
    borderBottomColor: "#DCC5A3",
    borderBottomWidth: 2,
  },
  title_name: {
    color: "#DCC5A3",
    fontSize: 48,
    fontWeight: "500",
    fontFamily: "NovaFlat_400Regular",
    marginBottom: 10,
  },
});

export default Header;
