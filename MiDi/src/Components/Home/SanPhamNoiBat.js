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
  Button
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
    return <View>
        <View style={{ backgroundColor: "#FF5722", height: H * 0.01, marginTop: 10 }} />
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sản phẩm nổi bật</Text>
          </View>

          <ListView contentContainerStyle={styles.body} enableEmptySections dataSource={new ListView.DataSource(
              {
                rowHasChanged: (r1, r2) => r1 !== r2
              }
            ).cloneWithRows(topProducts)} renderRow={product => <TouchableOpacity style={styles.productContainer} onPress={console.log("asasas")}>
                <Image source={{ uri: `${url}${product.images[0]}` }} style={styles.productImage} />
                <Text style={styles.produceName}>
                  {product.name.toUpperCase()}
                </Text>
                <Text style={styles.producePrice}>{product.price}$</Text>
              </TouchableOpacity>} renderSeparator={(sectionId, rowId) => {
              if (rowId % 2 === 1) return <View style={{ width, height: 10 }} />;
              return null;
            }} />
        </View>
        <View style={{ borderColor: "#FF5722", margin: 5 }}>
          <TouchableOpacity onPress={() => {
              this.props.goToMall();
            }}>
            <Text style={{color: "#FF5722", textAlign: "center", fontSize: 20, fontFamily: "Avenir"}} >Xem thêm</Text>
          </TouchableOpacity>
        </View>
      </View>;
  }
}
const { width } = Dimensions.get("window");
const produtWidth = (width - 20) / 2;
const productImageHeight = produtWidth / 361 * 452;

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
    justifyContent: "space-around",
    flexWrap: "wrap",
    paddingBottom: 10,
    backgroundColor: "whitesmoke"
  },
  productContainer: {
    width: produtWidth,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    backgroundColor:"#fff"
  },
  productImage: {
    width: produtWidth,
    height: productImageHeight
  },
  produceName: {
    marginVertical: 5,
    paddingLeft: 10,
    fontFamily: "Avenir",
    color: "black",
  },
  producePrice: {
    marginBottom: 5,
    paddingLeft: 10,
    fontFamily: "Avenir",
    color: "#FF5722"
  }
});
