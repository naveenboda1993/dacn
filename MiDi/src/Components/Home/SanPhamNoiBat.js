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
const url = "http://192.168.56.1:8080/midishop/images/product/";
import sanphamnoibat from "../../API/FeaturedProduct";

var H = Dimensions.get("window").height;
var W = Dimensions.get("window").width;

export default class SanPhamNoiBat extends Component {
  constructor(props) {
    super(props);
    this.state = { types: [], topProducts: [] };
  }
  componentDidMount() {
    sanphamnoibat().then(resJSON => {
      console.log(resJSON);
      const { type, product } = resJSON;
      this.setState({ types: type, topProducts: product });
    });
  }
  render() {
    const { topProducts } = this.state;
    return <ListView enableEmptySections dataSource={new ListView.DataSource(
          {
            rowHasChanged: (r1, r2) => r1 !== r2
          }
        ).cloneWithRows(topProducts)} renderRow={product => <TouchableOpacity onPress={console.log("asasas")}>
            <Image source={{ uri: `${url}${product.images[0]}` }} style={{ width: 100, height: 200 }} />
            <Text>{product.name}</Text>
            <Text>{product.price} VNĐ</Text>
          </TouchableOpacity>} renderSeparator={(sectionId, rowId) => {
          if (rowId % 2 === 1) return <View style={{ width: 10, height: 10 }} />;
          return null;
        }} />;
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
