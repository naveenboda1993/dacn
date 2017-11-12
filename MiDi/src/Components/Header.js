import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  StyleSheet
} from "react-native";
import icLogo from "../media/md_t.png";
import SearchHeader from "./Search/SearchHeader";

const { height } = Dimensions.get("window");

export default class Header extends Component {

  render() {
    const {
      wrapper,
      row1,
      textInput,
      iconStyle,
      titleStyle,
      iconLogo
    } = styles;
    return <View style={wrapper}>
        <View style={row1}>
          <Image source={icLogo} style={iconLogo} />
          <Text style={titleStyle}>MidiShop - Bắt kịp xu thế</Text>
          <TouchableOpacity onPress={()=> this.props.gotoSearch()}>
              <Image source={require("../media/search.png")} style={iconStyle} />
          </TouchableOpacity>
          <Image source={require("../media/chat.png")} style={iconStyle} />
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height / 16,
    backgroundColor: "#F23F1F",
    padding: 10,
    justifyContent: "space-around"
  },
  row1: { flexDirection: "row", justifyContent: "space-between" },
  textInput: {
    height: height / 23,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    paddingVertical: 0
  },
  titleStyle: { color: "#FFF", fontFamily: "Avenir", fontSize: 20 },
  iconStyle: { width: 25, height: 25 },
  iconLogo: { width: 40, height: 23 }
});
