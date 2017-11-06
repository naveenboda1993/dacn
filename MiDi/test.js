import React, { Component } from "react";
import {
  ListView, View, TouchableOpacity, Text, Image
} from "react-native";


const url = "http://192.168.56.1:8080/midishop/images/product/";;
import initData from "./src/API/TopPorduct";


export default class Test extends Component {
  constructor(props){
    super(props);
    this.state={
      types:[],
      topProducts:[],
    }
  }
  componentDidMount() {
    initData().then(resJSON => {
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
