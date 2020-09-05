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
import Icon from "react-native-vector-icons/AntDesign";
import Header from './Header.js';

const { width: WIDTH } = Dimensions.get("window");

function TaskPage(props) {
  return (
    <SafeAreaView style={styles.container}>
        <Header style={{justifyContent: "center"}} title={"Daily Task"} />

        <View style={styles.taskContainer}>
          <Icon
            name={"star"}
            size={60}
            color={"#FAF9F9"}
            style={styles.inputIcon}
          />
          <Text style={styles.fontLarge}>TikTok Star</Text>
          <Text style={styles.fontMed}>Record a 30 seconds video doing your best friend's worst habit.</Text>
          <Text style={styles.fontSmall}>Time Remaining: </Text>
          <Text style={styles.fontSmall}>23 hours</Text>
        </View>
        
        {/* <NavBar /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F9",
    /*alignItems: "center"*/
    /*justifyContent: "center",*/
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  taskContainer: {
    margin: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FAF9F9",
    borderWidth: 1,
    backgroundColor: "#EABCB9",
    borderRadius: 20
  },
  fontLarge: {
    marginTop: 80,
    fontSize: 42, 
    color: "#FAF9F9",
    textAlign: "center",
    fontFamily: "NovaFlat_400Regular",
  },
  fontMed: {
    fontSize: 32, 
    color: "#FAF9F9",
    textAlign: "center",
    fontFamily: "NovaFlat_400Regular",
    padding: 40,
  },
  fontSmall: {
    fontSize: 18, 
    color: "#FAF9F9",
    textAlign: "center",
    fontFamily: "NovaFlat_400Regular",
    bottom: 20,
  },
  inputIcon: {
    position: "absolute",
    top: 20,
    left: (WIDTH - 70 - 20 - 50) /2+25,
  },
});

export default TaskPage;
