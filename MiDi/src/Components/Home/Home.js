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


import SearchHeader from "../Search/SearchHeader";
import Slider from "./Slider";

const screen = Dimensions.get("window");

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
      {/* ------------------- THANH SEARCH HEADER -------------------------- */}
        <SearchHeader />
        {/* ------------------- SLIDER QUẢNG CÁO -------------------------- */}
        <Swiper
        dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 0, height: 0, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#fff', width: 0, height:0, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          paginationStyle={{
            bottom: 70
          }}
          loop={true}
          autoplay
        >
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("./../../Images/banner1.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("./../../Images/banner2.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("./../../Images/banner3.jpg")}
            />
          </View>
        </Swiper>
        {/* ------------------- KHOẢNH CÁCH CAM -------------------------- */}
        <View style={{backgroundColor: "#FF5722", height: screen.height*1/100}}>
          <Text></Text>
        </View>
        {/* ------------------- Midi Mall -------------------------- */}
      </View>
    );
  }
}
{/* ------------------- STYLES -------------------------- */}
const styles = StyleSheet.create({
  img: { width: screen.width, height: screen.height * 0.2 },
  container: {
    flex: 0.25,
  },

  image: {
    width: screen.width,
    height: screen.height * 0.2
  }
});
