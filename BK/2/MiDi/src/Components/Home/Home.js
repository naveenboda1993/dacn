import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import SearchHeader from '../Search/SearchHeader';

const screen = Dimensions.get("window");

export default class Home extends Component {
  render() {
    return <View>
        <SearchHeader />
        <ScrollView horizontal>
          <Image style={styles.img} source={require("./../../Images/banner1.jpg")} />
          <Image style={styles.img} source={require("./../../Images/banner2.jpg")} />
          <Image style={styles.img} source={require("./../../Images/banner3.jpg")} />
        </ScrollView>
      </View>;
  }
}

const styles = StyleSheet.create({
  img:{width: screen.width, height: screen.height*0.2}
})
