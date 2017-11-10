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
  ListView,
  Button,
  FlatList
} from "react-native";
import Swiper from "react-native-swiper";
import EvilIcons from "react-native-vector-icons/EvilIcons";
const url = "http://192.168.56.1:8080/api/images/product/";
import initData from "../../API/initData";

var H = Dimensions.get("window").height;
var W = Dimensions.get("window").width;

export default class SanPhamNoiBat extends Component {
  constructor(props) {
    super(props);
    this.state = { topProducts: [] };
  }
  componentDidMount() {
    initData().then(resJSON => {
      console.log(resJSON);
      const { product } = resJSON;
      this.setState({ topProducts: product });
    });
  }
  _spnoibat(product){
    return(
    <View style={styles.body}>
      <TouchableOpacity style={styles.productContainer} onPress={() => {
          this.props.goToProductDetail(product);
        }}>
        <Image source={{ uri: `${url}${product.images[0]}` }} style={styles.productImage} />
        <Text style={styles.produceName}>{product.name.toUpperCase()}</Text>
        <Text style={styles.producePrice}>{product.price}$</Text>
      </TouchableOpacity>
    </View>
    );
  }
  render() {
    const { topProducts } = this.state;
    return <View>
        <View style={{ backgroundColor: "#FF5722", height: H * 0.01, marginTop: 10 }} />
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sản phẩm nổi bật</Text>
          </View>

          <FlatList data={this.state.topProducts} 
            numColumns={2}
            keyExtractor={item=>item.id} 
            renderItem={({item})=>this._spnoibat(item)} 
          />

        </View>
        <View style={{ borderColor: "#FF5722", margin: 5 }}>
          <TouchableOpacity onPress={() => {
              this.props.goToMall();
            }}>
            <Text style={{ color: "#FF5722", textAlign: "center", fontSize: 20, fontFamily: "Avenir" }}>
              Xem thêm
            </Text>
          </TouchableOpacity>
        </View>
      </View>;
  }
}
const { width } = Dimensions.get("window");
const productWidth = (width - 20) / 2;
const productImageHeight = productWidth / 361 * 452;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  titleContainer: {
    height: 40,
    justifyContent: "center",
    paddingLeft: 10,
    backgroundColor: "whitesmoke"
  },
  title: {
    color: "#FF5722",
    fontSize: 16
  },
  body: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 10,
    marginRight: 5,
    marginLeft: 5
    
  },
  productContainer: {
    width: productWidth,
    // shadowColor: "#2E272B",
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.2,
    // backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 0.5
  },
  productImage: {
    width: productWidth,
    height: productImageHeight
  },
  produceName: {
    marginVertical: 5,
    paddingLeft: 10,
    fontFamily: "Avenir",
    color: "#A7A7A7"
  },
  producePrice: {
    marginBottom: 5,
    paddingLeft: 10,
    fontFamily: "Avenir",
    color: "#FF5722"
  }
});
