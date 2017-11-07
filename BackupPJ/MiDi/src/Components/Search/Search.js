import React, { Component } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const screen = Dimensions.get("window");

export default class Search extends Component {
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
          <Text style={{paddingLeft: 5 }}>Tìm kiếm trong MiDiShop</Text>
        </View>
      </View>
    );
  }
}
