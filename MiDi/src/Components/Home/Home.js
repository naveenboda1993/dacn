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

import Header from "../Header";
import ThuongHieu from "./ThuongHieu";
import SanPhamNoiBat from "./SanPhamNoiBat";
import Global from "../../Global";

var H = Dimensions.get("window").height;
var W = Dimensions.get("window").width;
export default class Home extends Component {
  constructor(props) {
    super(props);
    // Global.gotoSearch = this.gotoSearch.bind(this);
  }
  // gotoSearch() {
  //   this.setState({ selectedTab: "ManHinh_Search" });
  // }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header
          gotoSearch={() => {
            this.props.navigation.navigate("ManHinh_Search");
          }}
        />

        <View style={{ height: H / 5, width: W }}>
          <Swiper
            style={{ height: H / 5, width: W }}
            showsButtons={true}
            autoplay
          >
            <Image
              style={{ width: W, height: H / 5 }}
              source={require("./../../Images/banner1.jpg")}
            />
            <Image
              style={{ width: W, height: H / 5 }}
              source={require("./../../Images/banner2.jpg")}
            />
            <Image
              style={{ width: W, height: H / 5 }}
              source={require("./../../Images/banner3.jpg")}
            />
            <Image
              style={{ width: W, height: H / 5 }}
              source={require("./../../Images/banner4.jpg")}
            />
          </Swiper>
        </View>

        <ThuongHieu
          gotoListProduct={category => {
            this.props.navigation.navigate("ManHinh_ListProduct", { category });
          }}
        />
        <SanPhamNoiBat
          goToProductDetail={product => {
            this.props.navigation.navigate("ManHinh_ProductDetail", {
              product
            });
          }}
          goToMall={() => {
            this.props.navigation.navigate("ManHinh_Mall");
          }}
        />
      </ScrollView>
    );
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
  }
});
