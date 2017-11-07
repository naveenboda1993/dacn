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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const screen = Dimensions.get("window");

export default class Search extends Component {
  render() {
    return <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", width: 300, backgroundColor: "#F0F0F0", margin: 8, borderRadius: 3, paddingRight: 10, alignItems: "center", padding: 3}}>
          <EvilIcons name="search" size={30}/>
          <TextInput style={{ height: 40, width:260 }} placeholder="Tìm kiếm sản phẩm" onChangeText={text => this.setState(
                { text }
              )} />
        </View>
        <TouchableOpacity onPress={() => {
            this.props.navigation.goBack();
          }}>
        <Text style={{ color: "#F23F1F"}}>
            Hủy
          </Text>
        </TouchableOpacity>
      </View>;
  }
}
