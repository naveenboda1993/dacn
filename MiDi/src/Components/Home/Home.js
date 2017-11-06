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
    return (
      <ScrollView style={styles.container}>
        <SearchHeader
          goToSearch={() => {
            this.props.navigation.navigate("ManHinh_Search");
          }}
        />

        <View style={{ height: H / 6, width: W }}>
          <Swiper style={{ height: H / 6, width: W }} showsButtons={true}>
            <Image
              style={{ width: W, height: H / 6 }}
              source={require("./../../Images/banner1.jpg")}
            />
            <Image
              style={{ width: W, height: H / 6 }}
              source={require("./../../Images/banner2.jpg")}
            />
            <Image
              style={{ width: W, height: H / 6 }}
              source={require("./../../Images/banner3.jpg")}
            />
            <Image
              style={{ width: W, height: H / 6 }}
              source={require("./../../Images/banner4.jpg")}
            />
          </Swiper>
        </View>

        <ThuongHieu />
        <SanPhamNoiBat />
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
  },

  wrapper: {
    backgroundColor: "#fff",
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    margin: 5,
    paddingHorizontal: 5
  },

  productContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    borderTopColor: "#F0F0F0",
    borderBottomColor: "rgba(231, 76, 60,1.0)",
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    borderWidth: 1
  },
  titleStyle: {
    fontFamily: "Avenir",
    color: "#B10D65",
    fontSize: 20
  },
  productImage: {
    width: produtWidth,
    height: productImageHeight
  },
  productInfo: {
    justifyContent: "space-between",
    marginLeft: 15,
    flex: 1
  },
  lastRowInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  txtName: {
    marginVertical: 5,
    paddingLeft: 5,
    fontFamily: "Avenir",
    color: "black",
    fontWeight: "200"
  },
  txtPrice: {
    fontFamily: "Avenir",
    marginRight: 5,
    color: "#B10D65"
  },

  txtShowDetail: {
    fontFamily: "Avenir",
    color: "#B10D65",
    fontSize: 12
  }
});
