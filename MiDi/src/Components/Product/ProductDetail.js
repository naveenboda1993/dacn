import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import global from "../../Global";

const cart = require("../../media/cart.png");
const back = require("../../media/back_c.png");
const url = "http://192.168.56.1:8080/api/images/product/";

export default class ProductDetail extends Component {
  addThisProductToCart() {
    const { product } = this.props.navigation.state.params;
    global.addProductToCart(product);
  }
  render() {
    const {
      wrapper,
      cardStyle,
      header,
      footer,
      imageContainer,
      cartStyle,
      textBlack,
      textSmoke,
      textHighlight,
      titleContainer,
      descContainer,
      productImageStyle,
      descStyle,
      txtMaterial,backStyle
    } = styles;
    const {
      id,
      name,
      price,
      color,
      material,
      description,
      images
    } = this.props.navigation.state.params.product;
    return (
      <View style={wrapper}>
              
        <ScrollView style={cardStyle}>
        <View style={header}>
        <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Image style={backStyle} source={back} />
            </TouchableOpacity>
            </View>
          <View style={imageContainer}>
            <ScrollView
              style={{
                flexDirection: "row",
                padding: 10,
                height: swiperHeight
              }}
              horizontal
            >
              <Image
                source={{ uri: `${url}${images[0]}` }}
                style={productImageStyle}
              />
              <Image
                source={{ uri: `${url}${images[1]}` }}
                style={productImageStyle}
              />
            </ScrollView>
          </View>
          <View style={footer}>
            <View style={titleContainer}>
              <Text style={textBlack}>{name.toUpperCase()}</Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 15,
                  justifyContent: "space-between"
                }}
              >
                <Text style={txtMaterial}>Chất liệu: {material}</Text>
                <Text style={textSmoke}>{price} VNĐ</Text>
              </View>
            </View>
            <View style={descContainer}>
              <Text style={descStyle}>{description}</Text>
            </View>
            <View style={header}>
              <TouchableOpacity
                style={styles.bigButton}
                onPress={this.addThisProductToCart.bind(this)}
              >
                <Text style={styles.buttonText}>Mua ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const produtWidth = (width - 40) / 2;
const productImageHeight = produtWidth;
const swiperWidth = width / 1.8 - 30;
const swiperHeight = swiperWidth * 452 / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#D6D6D6"
  },
  cardStyle: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 5
  },
  header: {
    flex: 0.06,
    paddingHorizontal: 15,
    paddingTop: 5
  },
  cartStyle: {
    width: 25,
    height: 25
  },

  productStyle: {
    width: width / 2,
    height: width / 2
  },
  footer: {
    flex: 6
  },
  imageContainer: {
    flex: 6,
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10
  },
  textBlack: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "bold",
    color: "#3F3F46"
  },
  textSmoke: {
    fontFamily: "Avenir",
    fontSize: 18,
    color: "#B10D65"
  },
  textHighlight: {
    fontFamily: "Avenir",
    fontSize: 20,
    color: "#7D59C8"
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: "#F6F6F6",
    marginHorizontal: 20,
    paddingBottom: 5
  },
  descContainer: {
    margin: 10,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  descStyle: {
    color: "#AFAFAF"
  },
  linkStyle: {
    color: "#7D59C8"
  },
  productImageStyle: {
    width: produtWidth,
    height: productImageHeight,
    marginHorizontal: 5
  },
  mainRight: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingLeft: 20
  },
  txtColor: {
    color: "#C21C70",
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtMaterial: {
    color: "#F23F1F",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  bigButton: {
    height: 50,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F23F1F"
  },
  buttonText: {
    fontFamily: "Avenir",
    color: "#fff",
    fontWeight: "400"
  },
  backStyle: {
    width: 25,
    height: 25
  }
  // header: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   flex: 1,
  //   paddingHorizontal: 15,
  // }
});
