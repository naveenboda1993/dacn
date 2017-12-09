import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ListView,
  Dimensions,
  StyleSheet,
  Image,
  Alert
} from "react-native";
import global from "../../Global";
import sendOrder from "../../API/sendOrder";
import getToken from "../../API/getToken";
import checkLogin from "../../API/checkLogin";
import initData from "../../API/initData";
import saveCart from "../../API/saveCart";
import getCart from "../../API/getCart";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

const url = "http://192.168.56.1:8080/api/images/product/";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartArray: []
    };
    global.addProductToCart = this.addProductToCart.bind(this);
  }
  componentDidMount() {
    getToken()
      .then(token => checkLogin(token))
      .then(res => {
        getCart().then(cartArray => this.setState({ cartArray }));
      })
      .catch(err => console.log("LOI CHECK LOGIN", err));
  }
  addProductToCart(product) {
    const isExist = this.state.cartArray.some(e => e.product.id === product.id);
    if (isExist) return false;
    this.setState(
      { cartArray: this.state.cartArray.concat({ product, quantity: 1 }) },
      () => saveCart(this.state.cartArray)
    );
  }
  incrQuantity(productId) {
    const newCart = this.state.cartArray.map(e => {
      if (e.product.id !== productId) return e;
      return { product: e.product, quantity: e.quantity + 1 };
    });
    this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
  }

  decrQuantity(productId) {
    const newCart = this.state.cartArray.map(e => {
      if (e.product.id !== productId) return e;
      return { product: e.product, quantity: e.quantity - 1 };
    });
    this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
  }

  removeProduct(productId) {
    const newCart = this.state.cartArray.filter(
      e => e.product.id !== productId
    );
    this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
  }
  gotoDetail(product) {
    const { navigate } = this.props.navigation;
    navigate("ManHinh_ProductDetail", { product });
  }

  async onSendOrder() {
    try {
      const token = await getToken();
      const arrayDetail = this.state.cartArray.map(e => ({
        id: e.product.id,
        quantity: e.quantity
      }));
      const kq = await sendOrder(token, arrayDetail);
      if (kq === "THEM_THANH_CONG") {
        console.log("THEM THANH CONG");
      } else {
        console.log("THEM THAT BAI", kq);
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {
      main,
      checkoutButton,
      checkoutTitle,
      wrapper,
      productStyle,
      mainRight,
      productController,
      txtName,
      txtPrice,
      productImage,
      numberOfProduct,
      txtShowDetail,
      showDetailContainer
    } = styles;
    const { cartArray } = this.state;
    const arrTotal = cartArray.map(e => e.product.price * e.quantity);
    const total = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;
    const loginJSX = (
      <View style={wrapper}>
        <ListView
          contentContainerStyle={main}
          enableEmptySections
          dataSource={new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }).cloneWithRows(cartArray)}
          renderRow={cartItem => (
            <View style={productStyle}>
              <Image
                source={{ uri: `${url}${cartItem.product.images[0]}` }}
                style={productImage}
              />
              <View style={[mainRight]}>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={txtName}>
                    {toTitleCase(cartItem.product.name)}
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.removeProduct(cartItem.product.id)}
                    style={{ marginRight: 10 }}
                  >
                    <Text style={{ fontFamily: "Avenir", color: "#969696" }}>
                      X
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={txtPrice}>{cartItem.product.price} VNĐ</Text>
                </View>
                <View style={productController}>
                  <View style={numberOfProduct}>
                    <TouchableOpacity
                      onPress={() => this.incrQuantity(cartItem.product.id)}
                    >
                      <Text style={{ fontSize: 14 }}>+</Text>
                    </TouchableOpacity>
                    <Text>{cartItem.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => this.decrQuantity(cartItem.product.id)}
                    >
                      <Text style={{ fontSize: 14 }}>-</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={showDetailContainer}
                    onPress={() => this.gotoDetail(cartItem.product)}
                  >
                    <Text style={txtShowDetail}>Xem chi tiết</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <TouchableOpacity
          style={checkoutButton}
          onPress={this.onSendOrder.bind(this)}
        >
          <Text style={checkoutTitle}>
            {" "}
            Tổng tiền: {total} VNĐ - THANH TOÁN NGAY
          </Text>
        </TouchableOpacity>
      </View>
    );
    return <View style={{ flex: 1 }}>{loginJSX}</View>;
  }
}

const { width } = Dimensions.get("window");
const imageWidth = width / 4;
const imageHeight = imageWidth * 452 / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#DFDFDF"
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: "#F23F1F",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  main: {
    width,
    backgroundColor: "#DFDFDF"
  },
  checkoutTitle: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "200",
    fontFamily: "Avenir"
  },
  productStyle: {
    flexDirection: "row",
    margin: 5,
    padding: 10,
    backgroundColor: "whitesmoke",
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: "center"
  },
  mainRight: {
    flex: 3,
    justifyContent: "space-between"
  },
  productController: {
    flexDirection: "row"
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  txtName: {
    paddingLeft: 20,
    color: "#A7A7A7",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtPrice: {
    paddingLeft: 20,
    color: "#F23F1F",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtShowDetail: {
    fontFamily: "Avenir",
    color: "#B10D65",
    fontSize: 12,
    textAlign: "right"
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

export default Cart;
