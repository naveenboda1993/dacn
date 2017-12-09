import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  AsyncStorage,
  FlatList,
  Alert
} from "react-native";

const url = "http://192.168.56.1:8080/api/images/product/";
var arrLoad = [];
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}
var t;
class Cart extends Component {
  constructor(props) {
    super(props);
    t = this;
    this.state = {
      arrProduct: [],
      total: 0
    };
  }
  _total() {
    var allPriceProduct = 0;
    arrLoad.map(function(o, i) {
      allPriceProduct = allPriceProduct + o.price * o.quantity;
    });
    t.setState({
      total: allPriceProduct
    });
  }
  gotoDetail() {
    const { navigator } = this.props;
    navigator.push({ name: "PRODUCT_DETAIL" });
  }
  _loadCart = async () => {
    try {
      var v = await AsyncStorage.getItem("@GioHang5:key");
      if (v !== null) {
        console.log(v);
        arrLoad = JSON.parse(v);
        this.setState({
          arrProduct: arrLoad
        });
        this._total();
      } else {
        console.log("khong load dc ne");
      }
    } catch (error) {}
  };
  _saveCart = async () => {
    try {
      await AsyncStorage.setItem("@GioHang5:key", JSON.stringify(arrLoad));
    } catch (e) {
      console.log(e);
    }
  };
  plusItem(i) {
    console.log("day la i ne +++++" + i);
    var stt = arrLoad.findIndex(e => {
      return e.id == i;
    });
    console.log("so thu tu cu gio hang la" + stt);
    arrLoad[stt].quantity += 1;
    t._saveCart().done();
    t._loadCart().done();
  }
  minusItem(i) {
    console.log("day la i ne +++++" + i);
    var stt = arrLoad.findIndex(e => {
      return e.id == i;
    });
    console.log("so thu tu cu gio hang la" + stt);
    arrLoad[stt].quantity -= 1;
    t._saveCart().done();
    t._loadCart().done();
  }
  deleteItem(i) {
    var stt = arrLoad.findIndex(e => {
      return e.id == i;
    });
    for (var x = arrLoad.length - 1; x >= 0; x--) {
      if (arrLoad[x].id === i) {
        arrLoad.splice(x, 1);
      }
      t._saveCart().done();
      t._loadCart().done();
    }
  }
  componentWillReceiveProps() {
    this._loadCart();
    console.log("componentWillReceiveProps+++++");
  }
  componentDidMount() {
    console.log("componentDidMount+++++");
    this._loadCart().done();
  }
  _loadUser = async () => {
    try {
      var v = await AsyncStorage.getItem("@Username:key");
      if (v !== null) {
        console.log("user:"+ v)
        console.log("di den man hinh thanh toan cac kieu");
      } else {
        Alert.alert(
          "Notification",
          "Vui long dang nhap de tiep tup",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => this.props}
          ],
          { cancelable: false }
        );
      }
    } catch (error) {}
  };

  order() {
    this._loadUser().done();
  }

  render() {
    const {
      main,
      checkoutButton,
      checkoutTitle,
      wrapper,
      product,
      mainRight,
      productController,
      txtName,
      txtPrice,
      productImage,
      numberOfProduct,
      txtShowDetail,
      showDetailContainer
    } = styles;
    return (
      <View style={wrapper}>
        <FlatList
          keyExtractor={item => item.id}
          data={this.state.arrProduct}
          renderItem={({ item }) => (
            <View style={product}>
              <Image
                source={{ uri: `${url}${item.images[0]}` }}
                style={productImage}
              />
              <View style={[mainRight]}>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row"
                  }}
                >
                  <Text style={txtName}>{toTitleCase(item.name)}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.deleteItem(item.id);
                    }}
                  >
                    <Text style={{ fontFamily: "Avenir", color: "#969696" }}>
                      X
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={txtPrice}>{item.price}$</Text>
                  <Text style={txtPrice}>
                    Total: {item.price * item.quantity}
                  </Text>
                </View>
                <View style={productController}>
                  <View style={numberOfProduct}>
                    <TouchableOpacity
                      onPress={() => {
                        this.plusItem(item.id);
                      }}
                    >
                      <Text>+</Text>
                    </TouchableOpacity>
                    <Text>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.minusItem(item.id);
                      }}
                    >
                      <Text>-</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={showDetailContainer}
                    onPress={() => {
                      this.props.goToProductDetail(item);
                    }}
                  >
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        <TouchableOpacity
          style={checkoutButton}
          onPress={() => {
            this.order();
          }}
        >
          <Text style={checkoutTitle}>
            Tổng {this.state.total}$ - THANH TOÁN NGAY
          </Text>
        </TouchableOpacity>
      </View>
    );
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
    fontWeight: "bold",
    fontFamily: "Avenir"
  },
  product: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
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
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtPrice: {
    paddingLeft: 20,
    color: "#F23F1F",
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtShowDetail: {
    color: "#C21C70",
    fontSize: 10,
    fontWeight: "400",
    fontFamily: "Avenir",
    textAlign: "right"
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

export default Cart;
