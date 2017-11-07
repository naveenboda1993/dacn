import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  StatusBar
} from "react-native";
import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

var H = Dimensions.get("window").height;
var W = Dimensions.get("window").width;

export default class Slider extends Component {
  render() {
    return <View>
        <View style={{ backgroundColor: "#FF5722", height: H * 0.01, marginBottom: 5 }} />
        <View style={{ height: H * 0.18 }}>
          <Text
            style={{
              color: "#FF5722",
              marginLeft: 8,
              fontFamily: "Avenir",
              fontSize: 16
            }}
          >
            Midi Mall
          </Text>
          <ScrollView horizontal contentContainerStyle={styles.contentContainer} showsHorizontalScrollIndicator={false}>
            <View>
              <Image style={styles.imgthuonghieu} source={require("../../Images/thuonghieu/1.jpg")} />
              <Image style={styles.imgthuonghieu} source={require("../../Images/thuonghieu/2.jpg")} />
            </View>
            <View>
              <Image style={styles.imgthuonghieu} source={require("../../Images/thuonghieu/3.jpg")} />
              <Image style={styles.imgthuonghieu} source={require("../../Images/thuonghieu/4.jpg")} />
            </View>
            <View>
              <Image style={styles.imgthuonghieu} source={require("../../Images/thuonghieu/5.jpg")} />
              <Image style={styles.imgthuonghieu} source={require("../../Images/thuonghieu/6.jpg")} />
            </View>

            <View>
              <Image style={styles.imgthuonghieu} source={require("../../Images/thuonghieu/7.jpg")} />
              <Image style={styles.imgthuonghieu} source={require("../../Images/thuonghieu/8.jpg")} />
            </View>
            <View>
              <Image style={styles.imgthuonghieu} source={require("../../Images/thuonghieu/9.jpg")} />
              <Image style={styles.imgthuonghieu} source={require("../../Images/thuonghieu/10.jpg")} />
            </View>
            <View>
              <Image style={styles.imgthuonghieu} source={require("../../Images/thuonghieu/11.jpg")} />
              <Image style={styles.imgthuonghieu} source={require("../../Images/thuonghieu/12.jpg")} />
            </View>
          </ScrollView>
        </View>
        <View style={{ height: H * 0.01, flexDirection: "row", marginLeft: 6, alignItems: "center", marginTop: 3 }}>
          <EvilIcons name="check" size={12} style={{ color: "#ff5722" }} />
          <Text style={{ color: "#FF5722", fontSize: 13, marginRight: 14 }}>
            Miễn phí trả hàng
          </Text>
          <EvilIcons name="check" size={12} style={{ color: "#ff5722" }} />
          <Text style={{ color: "#FF5722", fontSize: 13, marginRight: 14 }}>
            Chính hãng 100%
          </Text>
          <EvilIcons name="check" size={12} style={{ color: "#ff5722" }} />
          <Text style={{ color: "#FF5722", fontSize: 13 }}>
            Giao miễn phí
          </Text>
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  imgthuonghieu: {
    width: W * 0.26,
    height: H * 0.06,
    marginLeft: 5,
    marginBottom: 3,
    marginTop: 3,
    borderWidth: 1,
    borderColor: "black"
  },
});
