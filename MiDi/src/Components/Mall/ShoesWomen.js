import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Swiper from "react-native-swiper";

const screen = Dimensions.get("window");
export default class ShoesWomen extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor:"white",  justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 100, color: "red", textAlign: "center", justifyContent: "center", alignItems: "center"}}>
            Đồ ngốc
        </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({});
