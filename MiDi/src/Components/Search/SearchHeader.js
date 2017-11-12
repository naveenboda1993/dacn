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
import global from "../../Global";
import icLogo from "../../media/md_t.png";
// import icMenu from "../../../media/appIcon/ic_menu.png";
import search from "../../API/searchProduct";

const { height } = Dimensions.get("window");

export default class Header extends Component {
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
          <TouchableOpacity onPress={() => {
              this.props.gotoBack();
            }}>
            <Image source={require("./../../media/back.png")} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}>MidiShop - Tìm kiếm</Text>
          <Image source={icLogo} style={iconLogo} />
        </View>
        <TextInput style={textInput} placeholder="Bạn cần mua gì?" underlineColorAndroid="transparent" value={this.state.txtSearch} onChangeText={text => this.setState(
              { txtSearch: text }
            )} onSubmitEditing={this.onSearch.bind(this)} />
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
