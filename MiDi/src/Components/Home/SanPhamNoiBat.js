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


var H = Dimensions.get("window").height;
var W = Dimensions.get("window").width;

export default class SanPhamNoiBat extends Component {
  render() {
    return <View>
        <View style={{ backgroundColor: "#FF5722", height: H * 0.01, marginTop: 5 }} />
        <View style={styles.wrapper}>
          <View style={styles.productContainer}>
            <Image style={styles.productImage} source={require("./../../Images/banner2.jpg")} />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>abc</Text>
              <Text style={styles.txtPrice}>10000 VNĐ</Text>
              <View style={styles.lastRowInfo}>
                <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: "orange" }} />
                <TouchableOpacity onPress={() => this.gotoDetail(product)}>
                  <Text style={styles.txtShowDetail}>Xem chi tiết</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>;
  }
}
{
  /* ------------------- STYLES -------------------------- */
}
const produtWidth = (W - 40) / 2;
const productImageHeight = produtWidth;
const styles = StyleSheet.create({
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
