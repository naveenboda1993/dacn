import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";

import SearchHeader from "../Search/SearchHeader";
import ThuongHieu from "../Home/ThuongHieu";
import SanPhamNoiBat from "../Home/SanPhamNoiBat";
import {TabsMall} from "../../Route";
var H = Dimensions.get("window").height;
var W = Dimensions.get("window").width;
export default class Mall extends Component {
  render() {
    return (
      <View>
        <SearchHeader
          goToSearch={() => {
            this.props.navigation.navigate("ManHinh_Search");
          }}
        />
        <ScrollView>
                  <TabsMall/>
        </ScrollView>

      </View>
    );
  }
}
