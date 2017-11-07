
import React, { Component } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const screen = Dimensions.get("window");

export default class SearchHeader extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            width: 280,
            backgroundColor: "#F0F0F0",
            margin: 8,
            borderRadius: 3,
            paddingRight: 10
          }}
        >
          <EvilIcons name="search" size={20} />
          <Text style={{ color: "#F23F1F", paddingLeft: 5 }}>MiDiShop</Text>
        </View>
        <Ionicons
          name="ios-cart-outline"
          size={20}
          style={{ margin: 8, color: "#F23F1F" }}
        />
        <Ionicons
          name="ios-chatbubbles-outline"
          size={20}
          style={{ margin: 8, color: "#F23F1F" }}
        />
      </View>
    );
  }
}
