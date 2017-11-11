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
import Global from "../../Global";
import icLogo from "../../media/md_t.png";
import search from "../..//API/searchProduct";

const { height } = Dimensions.get("window");

export default class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtSearch: ""
    };
  }

  onSearch() {
    const { txtSearch } = this.state;
    this.setState({ txtSearch: "" });
    search(txtSearch)
      .then(arrProduct => global.setArraySearch(arrProduct))
      .catch(err => console.log(err));
  }

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
          < Image source = {
            icLogo
          }
          style = {
            iconLogo
          }
          />
          <Text style={titleStyle}>MidiShop - Bắt kịp xu thế</Text>
          < Image source = {
            require("./../../media/chat.png")
          }
          style = {
            iconStyle
          }
          />
        </View>
        <TextInput style={textInput} placeholder="Bạn cần mua gì?" underlineColorAndroid="transparent" value={this.state.txtSearch} onChangeText={text => this.setState(
              { txtSearch: text }
            )} onFocus={() => Global.gotoSearch()} onSubmitEditing={this.onSearch.bind(this)} />
      </View>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height / 8,
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
