import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Swiper from "react-native-swiper";

const screen = Dimensions.get("window");
export default class User extends Component {
  render() {
    return (
      <View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: { width: screen.width, height: screen.height * 0.2 },
  container: {
    flex: 0.25
  },

  image: {
    width: screen.width,
    height: screen.height * 0.2
  }
});
