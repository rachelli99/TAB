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
import Icon from "react-native-vector-icons/AntDesign"
import NavBar from "./NavBar.js"
import Header from './Header.js';

const { width: WIDTH } = Dimensions.get("window");

function HistoryPage(props) {
  return (
    <SafeAreaView style={styles.container}>
    <Header title={"History"} />
      <View style={{ flex: 1}}>
        <View style={styles.bg1}>
          <Icon
            name={"star"}
            size={40}
            color={"#969696"}
            style={styles.inputIcon}
          />
          <Text style={styles.inputLarge}>Coffee Run</Text>
          <Text style={styles.inputLarge}>09/01</Text>
        </View>
        <View style={styles.bg2}>
          <Icon
            name={"star"}
            size={40}
            color={"#969696"}
            style={styles.inputIcon}
          />
          <Text style={styles.inputLarge}>Funny TikTok Video</Text>
          <Text style={styles.inputLarge}>08/31</Text>
        </View>
        <View style={ styles.bg3}>
          <Icon
            name={"star"}
            size={40}
            color={"#969696"}
            style={styles.inputIcon}
          />
          <Text style={styles.inputLarge}>Meaningful Image</Text>
          <Text style={styles.inputLarge}>08/30</Text>
        </View>
        <View style={styles.bg4}>
          <Icon
            name={"star"}
            size={40}
            color={"#969696"}
            style={styles.inputIcon}
          />
          <Text style={styles.inputLarge}>Play LOL Together</Text>
          <Text style={styles.inputLarge}>08/29</Text>
        </View>
      </View>
      {/* <NavBar /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FAF9F9",
      alignSelf: "stretch",
      justifyContent: "center",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    bg1: {
        fontSize: 20, 
        color: "#9F9F9F",
        backgroundColor: "#F3E7E6",
        margin: 20,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bg2: {
        fontSize: 20, 
        color: "#9F9F9F",
        backgroundColor: "#EAE6F1",
        margin: 20,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bg3: {
        fontSize: 20, 
        color: "#9F9F9F",
        backgroundColor: "#F1EFE6",
        margin: 20,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bg4: {
        fontSize: 20, 
        color: "#9F9F9F",
        backgroundColor: "#E8F1E6",
        margin: 20,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inputLarge: {
      padding: 3,
      fontSize: 24,
      color: "#9F9F9F",
      fontFamily: "NovaFlat_400Regular",
    }
});

export default HistoryPage;