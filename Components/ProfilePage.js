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
import Icon from "react-native-vector-icons/Ionicons";
import NavBar from "./NavBar.js"

const { width: WIDTH } = Dimensions.get("window");

function ProfilePage(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titles}>
        <Image style={styles.profile_image} source={require('../assets/001.png')} />
        <Text style={styles.title}>Emily Wu</Text>
        <Text style={styles.subtitle}>4000 pts</Text>
      </View>

      <View style={{ flex: 2}}>
        <View style={styles.textContainer}>
          <Text style={styles.inputLarge}>Account Info</Text>
        </View>
        <View style={styles.subTextContainer}>
          <Text style={styles.input}>Account Name:</Text>
          <Text style={styles.input}>Emily Wu</Text>
        </View>
        <View style={styles.subTextContainer}>
          <Text style={styles.input}>Email: </Text>
          <Text style={styles.input}>emily.wu@gmail.com</Text>
        </View>
        <View style={styles.subTextContainer}>
          <Text style={styles.input}>Password: </Text>
          <Text style={styles.input}>**************</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.inputLarge}>Help and Support</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.inputLarge}>Redeem Points for new profile pictures</Text>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      {/* <NavBar /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F9",
    //alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titles: {
    flex: 1,
    backgroundColor: "#DCC5A3",
    alignItems: "center",
    marginVertical: 50,
    alignSelf: "stretch"
  },
  profile_image: {
    alignItems: "center",
    width: 100,
    height: 100,
    /*borderRadius: 100,
    borderColor: "#ccc",
    borderWidth: 1,*/
    marginTop: 20
  },
  title: {
    fontSize: 48,
    fontWeight: "500",
    fontFamily: "NovaFlat_400Regular",
    color: "#fff",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "NovaFlat_400Regular",
    color: "#fff",
  },
  textContainer: {
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  },
  subTextContainer: {
    backgroundColor: "#E3E3E3",
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputLarge: {
    fontSize: 20, 
    color: "#9F9F9F",
    padding: 20,
  },
  input: {
    padding: 3,
    fontSize: 16,
    color: "#9F9F9F"
  },
  loginButton: {
    marginLeft: 25,
    backgroundColor: "#E3C393",
    paddingVertical: 10,
    width: WIDTH - 90,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  loginButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
  }
});

export default ProfilePage;
