import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Button,
  StatusBar,
} from "react-native";
import Header from "./Header.js";
import Modal from "react-native-modal";

const { width: WIDTH } = Dimensions.get("window");

export default class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.people = [
      { name: "Mario", key: require("../assets/005.jpeg") },
      { name: "Boo", key: require("../assets/011.png") },
      { name: "Moe", key: require("../assets/012.png") },
      { name: "Wario", key: require("../assets/010.png") },
      { name: "Yoshi", key: require("../assets/009.jpeg") },
      { name: "Peach", key: require("../assets/008.jpeg") },
      { name: "Toad", key: require("../assets/007.jpeg") },
    ];
    this.state = {
      modalVisible: false,
      item: {},
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible, item) {
    this.setState({ modalVisible: visible });
    this.setState({ item: item });
  }

  hideModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    if (!this.state.modalVisible)
      return (
        <SafeAreaView style={styles.container}>
          <Header title={"Contacts"} />

          <View style={styles.container}>
            <FlatList
              data={this.people}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity
                    style={styles.contactContainer}
                    onPress={() => {
                      this.setModalVisible(true, item);
                    }}
                  >
                    <Image style={styles.profile_image} source={item.key} />
                    <Text style={styles.item}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </SafeAreaView>
      );
    return (
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPressOut={() => {
              this.setModalVisible(false);
            }}
            style={styles.popup_container}
          >
            <ScrollView directionalLockEnabled={true}>
              <TouchableWithoutFeedback>
                <View style={styles.popup}>
                  <Image
                    style={styles.profile_image_popup}
                    source={this.state.item.key}
                  />
                  <Text style={styles.popup_title}>{this.state.item.name}</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.popup_button}>
                      <Text>Play game together</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.popup_button}>
                      <Text>Chat</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </TouchableOpacity>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F9",
    paddingTop: 40,
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  popup_container: {
    flex: 1,
    margin: 20,
    padding: 30,
  },
  contactContainer: {
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 20,
    width: WIDTH - 50,
    borderBottomColor: "#DCC5A3",
    borderBottomWidth: 1,
    //backgroundColor: '#DCC5A3'
  },
  popup: {
    alignItems: "center",
    backgroundColor: "#FAF9F9",
    borderColor: "#AAA",
    borderWidth: 1,
    shadowColor: "#AAA",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 30,
  },
  name: {
    fontSize: 26,
    color: "#8D8D8D",
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 37,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    padding: 15,
    //backgroundColor: '#DCC5A3',
    color: "#8D8D8D",
    fontSize: 24,
    paddingLeft: 30,
  },
  profile_image: {
    alignItems: "center",
    top: 5,
    left: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  profile_image_popup: {
    alignItems: "center",
    top: 5,
    left: 10,
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 20,
  },
  popup_title: {
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "NovaFlat_400Regular",
  },
  popup_button: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#03a5fc",
    color: "white",
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
});

//export default ContactPage;
