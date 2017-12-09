import React, { Component } from "react";
import {View, Text, StyleSheet, Image,Dimensions,ScrollView, TouchableOpacity,AsyncStorage
} from "react-native";
import global from "../../Global";

const back = require("../../media/back_c.png");
const cart = require("../../media/cart.png");

const url = "http://192.168.56.1:8080/api/images/product/";
var arrLoad = [];
var arr = [];
export default class ProductDetail extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = ({
  //     product: []
  //   })
  // }
  addThisProductToCart() {
    const { product } = this.props;
    global.addProductToCart(product);
  }
  // componentWillMount() {
  //   this.setState({
  //     product : this.props.navigation.state.params.product
  //   })
  // }
_setDuLieu = async () => {
  console.log("++++++")
   try {
     var arr = [
       new OrderProduct(this.props.navigation.state.params.product.id,
         this.props.navigation.state.params.product.name,
         this.props.navigation.state.params.product.price,
         this.props.navigation.state.params.product.color,
         this.props.navigation.state.params.product.material,
         this.props.navigation.state.params.product.description,
         this.props.navigation.state.params.product.images,
         1
       ),
     ];
     //console.log("arr ne -------------",arr)
     arrLoad = arrLoad.concat(arr);
     await AsyncStorage.setItem('@GioHang5:key', JSON.stringify(arrLoad));
     //console.log("===========++++++------" + JSON.stringify(arrLoad));
   } catch (error) {
   }
 };
 _loadDuLieu = async () => {
  try {
    var v = await AsyncStorage.getItem('@GioHang5:key');
    if (v !== null){
        arrLoad = JSON.parse(v);
    } else {

    }
  } catch (error) {
  }
  return this._setDuLieu();
};
  render() {
    const {
      wrapper,
      cardStyle,
      header,
      footer,
      backStyle,
      imageContainer,
      cartStyle,
      textBlack,
      textSmoke,
      textHighlight,
      textMain,
      titleContainer,
      descContainer,
      productImageStyle,
      descStyle,
      txtMaterial,
      txtColor
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
        <View style={cardStyle}>
          <View style={header}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Image style={backStyle} source={back} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this._loadDuLieu()}}>
              <Image style={cartStyle} source={cart} />
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
			  <Image
                source={{ uri: `${url}${images[2]}` }}
                style={productImageStyle}
              />
            </ScrollView>
          </View>
          <View style={footer}>
            <View style={titleContainer}>
              <Text style={textMain}>
                <Text style={textBlack}>{name.toUpperCase()}</Text>
                <Text style={textHighlight}> / </Text>
                <Text style={textSmoke}>{price}$</Text>
              </Text>
            </View>
            <View style={descContainer}>
              <Text style={descStyle}>{description}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 15
                }}
              >
                <Text style={txtMaterial}>Material: {material}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={txtColor}>Color {color}</Text>
                  <View
                    style={{
                      height: 15,
                      width: 15,
                      backgroundColor: color.toLowerCase(),
                      borderRadius: 15,
                      marginLeft: 10,
                      borderWidth: 1,
                      borderColor: "black"
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const swiperWidth = width / 1.8 - 30;
const swiperHeight = swiperWidth * 452 / 361;

function OrderProduct(i,n,p,c,m,d,img,q){
    this.id = i;
    this.name = n;
    this.price = p;
    this.color = c;
    this.material = m;
    this.description = d;
    this.images = img;
    this.quantity = q;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#D6D6D6"
  },
  cardStyle: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20
  },
  cartStyle: {
    width: 25,
    height: 25
  },
  backStyle: {
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
  textMain: {
    paddingLeft: 20,
    marginVertical: 10
  },
  textBlack: {
    fontFamily: "Avenir",
    fontSize: 20,
    fontWeight: "bold",
    color: "#3F3F46"
  },
  textSmoke: {
    fontFamily: "Avenir",
    fontSize: 20,
    color: "#9A9A9A"
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
    width: swiperWidth,
    height: swiperHeight,
    marginHorizontal: 5
  },
  mainRight: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingLeft: 20
  },
  txtColor: {
    color: "#FF5722",
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtMaterial: {
    color: "#FF5722",
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Avenir"
  }
});
