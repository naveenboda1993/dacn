import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Swiper from "react-native-swiper";

const screen = Dimensions.get("window");
export default class ShoesMen extends Component {
  render() {
    return <View style={{flex: 1, backgroundColor:"red",  justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 100, color: "white", textAlign: "center", justifyContent: "center", alignItems: "center"}}>
            Ahii
        </Text>
    </View>;
  }
}

const styles = StyleSheet.create({
});
