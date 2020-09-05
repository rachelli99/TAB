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
  StatusBar,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Header from "./Header.js";
import { AutoComplete } from "material-ui";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

function TaskPage(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Header style={{ justifyContent: "center" }} title={"Daily Task"} />
      <ScrollView scrollEnabled={true}>
        <View style={styles.taskContainer}>
          <Icon
            name={"star"}
            size={60}
            color={"#FAF9F9"}
            style={styles.inputIcon}
          />
          <Text style={styles.fontLarge}>TikTok Star</Text>
          <Text style={styles.fontMed}>
            Record a 30 seconds video doing your best friend's worst habit.
          </Text>
          <Text style={styles.fontSmall}>Time Remaining: </Text>
          <Text style={styles.fontSmall}>23 hours</Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Mark as Complete</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAF9F9",
    alignItems: "center",
    overflow: "scroll",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderColor: "black",
    borderRadius: 2,
  },
  taskContainer: {
    marginHorizontal: 15,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FAF9F9",
    borderWidth: 1,
    backgroundColor: "#EABCB9",
    borderRadius: 20,
    height: HEIGHT - 270,
  },
  fontLarge: {
    marginVertical: 10,
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
    marginVertical: 20,
  },
  fontSmall: {
    fontSize: 18,
    color: "#FAF9F9",
    textAlign: "center",
    fontFamily: "NovaFlat_400Regular",
  },
  loginButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    width: WIDTH - 90,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default TaskPage;
