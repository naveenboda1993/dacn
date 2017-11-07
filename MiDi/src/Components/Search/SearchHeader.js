import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { StackNavigator, TabNavigator } from "react-navigation";
var H = Dimensions.get("window").height;
var W = Dimensions.get("window").width;

export default class SearchHeader extends Component {
  render() {
    return <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => {
            this.props.goToSearch();
          }}>
          <View style={{ flexDirection: "row", width: 280, backgroundColor: "#F0F0F0", margin: 8, borderRadius: 3, paddingRight: 10 }}>
            <EvilIcons name="search" size={22} />
            <Text style={{ color: "#F23F1F", paddingLeft: 5, fontSize: 16, fontFamily: "Avenir" }}>
              Snackers
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ios-chatbubbles-outline" size={22} style={{ margin: 8, color: "#F23F1F" }} />
        </TouchableOpacity>
      </View>;
  }
}
