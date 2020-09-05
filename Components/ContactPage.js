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
} from "react-native";
import Dialog, { DialogContent } from "react-native-popup-dialog";
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
      ModalVisible: false,
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible() {
    this.setState({ ModalVisible: true });
  }

  render() {
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
                  onPress={this.setModalVisible}
                >
                  <Image style={styles.profile_image} source={item.key} />
                  <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
                {/* 
              <Modal animationType="slide" transparent={false} visible={this.state.ModalVisible}>
                <View style={styles.popup}>
                  <Image style={styles.profile_image} source={item.key} />
                  <Text style={styles.item}>{item.name}</Text>
                </View>
              </Modal>
            */}
                <Dialog
                  visible={this.state.ModalVisible}
                  onTouchOutside={() => this.setState({ ModalVisible: false })}
                >
                  <DialogContent style={styles.popup}>
                    <View style={styles.popup}>
                      {/*<Image style={styles.profile_image} source={item.key} />*/}
                      <Text style={styles.item}>{item.name}</Text>
                    </View>
                  </DialogContent>
                </Dialog>
              </View>
            )}
          />
        </View>
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
    fontSize: 40,
    width: 20,
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
});

//export default ContactPage;
