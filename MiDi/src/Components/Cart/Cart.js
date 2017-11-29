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
  FlatList
} from "react-native";

const url = "http://192.168.56.1:8080/api/images/product/";
var arrLoad = [];
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

class Cart extends Component {
  constructor(props){
    super(props);
    this.state= {
      arrProduct : []
    }
  }
  gotoDetail() {
    const { navigator } = this.props;
    navigator.push({ name: "PRODUCT_DETAIL" });
  }
  _loadCart = async () => {
   try {
     var v = await AsyncStorage.getItem('@GioHang1:key');
     if (v !== null){
        console.log(v);
        arrLoad = JSON.parse(v);
        this.setState({
          arrProduct: arrLoad
        })
     } else {
        console.log("khong load dc ne");
     }
   } catch (error) {

   }
 };
 componentWillReceiveProps(){
   this._loadCart();
   console.log("componentWillReceiveProps+++++")
 }
  componentDidMount(){
    this._loadCart().done();
  };

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
    return <View style={wrapper}>
        <FlatList keyExtractor={item => item.id} data={this.state.arrProduct} renderItem={({ item }) => <View style={product}>
              <Image source={{ uri: `${url}${item.images[0]}` }} style={productImage} />
              <View style={[mainRight]}>
                <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                  <Text style={txtName}>{toTitleCase(item.name)}</Text>
                  <TouchableOpacity>
                    <Text
                      style={{ fontFamily: "Avenir", color: "#969696" }}
                    >
                      X
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={txtPrice}>{item.price}$</Text>
                </View>
                <View style={productController}>
                  <View style={numberOfProduct}>
                    <TouchableOpacity>
                      <Text>+</Text>
                    </TouchableOpacity>
                    <Text>{3}</Text>
                    <TouchableOpacity>
                      <Text>-</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={showDetailContainer} onPress={() => {
                      this.props.goToProductDetail(item);
                    }}>
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>} />
        <TouchableOpacity style={checkoutButton}>
          <Text style={checkoutTitle}>Tổng {1000}$ - THANH TOÁN NGAY</Text>
        </TouchableOpacity>
      </View>;
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
