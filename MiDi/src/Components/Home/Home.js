import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ListView
} from "react-native";
import Swiper from "react-native-swiper";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import SearchHeader from "../Search/SearchHeader";
import ThuongHieu from "./ThuongHieu";
import SanPhamNoiBat from "./SanPhamNoiBat";

var H = Dimensions.get("window").height;
var W = Dimensions.get("window").width;

export default class Home extends Component {
  render() {
    return <ScrollView style={styles.container}>
        <SearchHeader goToSearch={() => {
            this.props.navigation.navigate("ManHinh_Search");
          }} goToCartView={() => {
            this.props.navigation.navigate("ManHinh_CartView");
          }} />

        <View style={{ height: H / 5, width: W }}>
          <Swiper style={{ height: H / 5, width: W }} showsButtons={true} autoplay>
            <Image style={{ width: W, height: H / 5 }} source={require("./../../Images/banner1.jpg")} />
            <Image style={{ width: W, height: H / 5 }} source={require("./../../Images/banner2.jpg")} />
            <Image style={{ width: W, height: H / 5 }} source={require("./../../Images/banner3.jpg")} />
            <Image style={{ width: W, height: H / 5 }} source={require("./../../Images/banner4.jpg")} />
          </Swiper>
        </View>

        <ThuongHieu />
        <SanPhamNoiBat goToProductDetail={() => {
            this.props.navigation.navigate("ManHinh_ProductDetail");
          }} goToMall={() => {
            this.props.navigation.navigate("ManHinh_Mall");
          }} />
      </ScrollView>;
  }
}
{
  /* ------------------- STYLES -------------------------- */
}
const produtWidth = (W - 40) / 2;
const productImageHeight = produtWidth;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  slide1: {
    width: W,
    height: H * 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
