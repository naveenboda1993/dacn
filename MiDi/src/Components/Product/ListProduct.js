import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ListView,
  RefreshControl
} from "react-native";

import backList from "../../media/back_c.png";
import sp1 from "../../media/32.jpg";

import getListProduct from "../../API/getListProduct";

const url = "http://192.168.56.1:8080/api/images/product/";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      listProducts: ds,
      refreshing: false,
      page: 1
    };
    this.arr = [];
  }

  componentDidMount() {
    const idType = this.props.navigation.state.params.category.id;
    getListProduct(idType, 1)
      .then(arrProduct => {
        this.arr = arrProduct;
        this.setState({
          listProducts: this.state.listProducts.cloneWithRows(this.arr)
        });
      })
      .catch(err => console.log(err));
  }

  gotoDetail(product) {
    this.props.navigation.navigate("ManHinh_ProductDetail", { product });
  }

  render() {
    const {
      container,
      header,
      wrapper,
      backStyle,
      titleStyle,
      productContainer,
      productImage,
      productInfo,
      lastRowInfo,
      txtName,
      txtPrice,
      txtMaterial,
      txtColor,
      txtShowDetail
    } = styles;
    const { category } = this.props.navigation.state.params;
    return (
      <View style={container}>
        <View style={wrapper}>
          <View style={header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={backList} style={backStyle} />
            </TouchableOpacity>
            <Text style={titleStyle}>{category.name}</Text>
            <View style={{ width: 30 }} />
          </View>
          <ListView
            removeClippedSubviews={false}
            dataSource={this.state.listProducts}
            renderRow={product => (
              <View style={productContainer}>
                <Image
                  style={productImage}
                  source={{ uri: `${url}${product.images[0]}` }}
                />
                <View style={productInfo}>
                  <Text style={txtName}>{toTitleCase(product.name)}</Text>
                  <Text style={txtPrice}>{product.price} VNĐ</Text>
                  <View style={lastRowInfo}>
                    <View
                      style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: product.color.toLowerCase()
                      }}
                    />
                    <TouchableOpacity onPress={() => this.gotoDetail(product)}>
                      <Text style={txtShowDetail}>Xem chi tiết</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                  this.setState({ refreshing: true });
                  const newPage = this.state.page + 1;
                  const idType = this.props.navigation.state.params.category.id;
                  getListProduct(idType, newPage)
                    .then(arrProduct => {
                      this.arr = arrProduct.concat(this.arr);
                      this.setState({
                        listProducts: this.state.listProducts.cloneWithRows(
                          this.arr
                        ),
                        refreshing: false
                      });
                    })
                    .catch(err => console.log(err));
                }}
              />
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBD8"
  },
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5
  },
  wrapper: {
    backgroundColor: "#fff",
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    margin: 10,
    paddingHorizontal: 10
  },
  backStyle: {
    width: 30,
    height: 30
  },
  productContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    borderTopColor: "#F0F0F0",
    borderBottomColor: "#FFF",
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    borderWidth: 1
  },
  titleStyle: {
    fontFamily: "Avenir",
    color: "#FF5722",
    fontSize: 20
  },
  productImage: {
    width: 90,
    height: 90 * 452 / 361
  },
  productInfo: {
    justifyContent: "space-between",
    marginLeft: 15,
    flex: 1
  },
  lastRowInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  txtName: {
    fontFamily: "Avenir",
    color: "#BCBCBC",
    fontSize: 20,
    fontWeight: "400"
  },
  txtPrice: {
    fontFamily: "Avenir",
    color: "#FF5722"
  },
  txtMaterial: {
    fontFamily: "Avenir"
  },
  txtColor: {
    fontFamily: "Avenir"
  },
  txtShowDetail: {
    fontFamily: "Avenir",
    color: "#FF5722",
    fontSize: 11
  }
});
