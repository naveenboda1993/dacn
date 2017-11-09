import React, { Component } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import SearchHeader from '../Search/SearchHeader';

const screen = Dimensions.get("window");

export default class Home extends Component {
  render() {
    return(
      <View>
        <SearchHeader/>
      </View>
    )
  }
}
