import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  Dimensions,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign"
import Header from './Header.js';

const { width: WIDTH } = Dimensions.get("window");

function ContactPage(props) {
  const [people, setPeople] = useState([
    {name:'Mario', key: require('../assets/005.jpeg')},
    {name:'Boo', key:  require('../assets/011.png')},
    {name:'Moe', key:  require('../assets/012.png')},
    {name:'Wario', key:  require('../assets/010.png')},
    {name:'Yoshi', key:  require('../assets/009.jpeg')},
    {name:'Peach', key:  require('../assets/008.jpeg')},
    {name:'Toad', key:  require('../assets/007.jpeg')},
  ]);

  const Item = ({ name, image }) => (
    <View style={styles.contactContainer}>
      <Image style={styles.profile_image} source={image} />
      <Text style={styles.item}>{name}</Text>
    </View>
  )
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Contacts"} />
      
      <View style={styles.container}>
        <FlatList 
          data={people}

          renderItem={({ item }) => (
            <View style={styles.contactContainer}>
              <Image style={styles.profile_image} source={item.key} />
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      
    </SafeAreaView>
  );
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
    width: WIDTH - 50,
    borderBottomColor: "#DCC5A3",
    borderBottomWidth: 1,
    //backgroundColor: '#DCC5A3'
  },
  name: {
    fontSize: 26, 
    color: "#8D8D8D"
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
  }
});

export default ContactPage;
