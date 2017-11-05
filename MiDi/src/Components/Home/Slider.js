import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  StatusBar
} from "react-native";
import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const screen = Dimensions.get("window");

export default class Slider extends Component {
  render() {
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Swiper style={styles.wrapper} dot={<View style={{ backgroundColor: "rgba(255,255,255,.3)", width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />} activeDot={<View style={{ backgroundColor: "#fff", width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />} paginationStyle={{ bottom: 70 }} loop={true} autoplay>
          <View style={styles.slide}>
            <Image style={styles.image} source={require("./../../Images/banner1.jpg")} resizeMode="cover" />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={require("./../../Images/banner2.jpg")} resizeMode="cover" />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={require("./../../Images/banner3.jpg")} />
          </View>
        </Swiper>
    </View>);
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width: screen.width,
    height: screen.height*0.2,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width: screen.width,
    height: screen.height*0.2,
  }
})
