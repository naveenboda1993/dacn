import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from "react-native";
import Swiper from "react-native-swiper";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import SearchHeader from "../Search/SearchHeader";

var H = Dimensions.get("window").height;
var W = Dimensions.get("window").width;

export default class Home extends Component {
  render() {
    return <View style={styles.container}>
        <SearchHeader goToSearch={() => {
            this.props.navigation.navigate("ManHinh_Search");
          }} />

        <View
          style={{ height: H * 0.3, width: W, backgroundColor: "black" }}
        >
          {/* <Swiper style={{ height: H * 0.3, width: W }} showsButtons={true}>
            <View style={{ height: H * 0.3 }}>
              <Image
                style={{ width: W, height: H * 0.3 }}
                source={require("./../../Images/banner2.jpg")}
              />
            </View>
          </Swiper> */}
        </View>

        <View style={{ backgroundColor: "#FF5722", height: H * 0.01 }}>
          <Text />
        </View>

        <View style={{ height: H * 0.18 }}>
          <Text
            style={{
              color: "#FF5722",
              marginLeft: 5,
              fontWeight: "bold",
              fontFamily: "Cochin"
            }}
          >
            MIDI MALL
          </Text>
          <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
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
        <View style={{ height: H * 0.01, flexDirection: "row", marginLeft: 10,alignItems: "center" }}>
          <EvilIcons name="check" size={12} style={{ color: "#ff5722"}} />
          <Text style={{ color: "#FF5722", fontSize: 12, marginRight: 20 }}>
            Miễn phí trả hàng
          </Text>
          <EvilIcons name="check" size={12} style={{ color: "#ff5722" }} />
          <Text style={{ color: "#FF5722", fontSize: 12, marginRight: 20 }}>
            Chính hãng 100%
          </Text>
          <EvilIcons name="check" size={12} style={{ color: "#ff5722" }} />
          <Text style={{ color: "#FF5722", fontSize: 12 }}>
            Giao miễn phí
          </Text>
        </View>

        <View style={{ backgroundColor: "#FF5722", height: H * 0.01, marginTop: 5 }}>
          <Text />
        </View>


      </View>;
  }
}
{
  /* ------------------- STYLES -------------------------- */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  imgthuonghieu: {
    width: W * 0.26,
    height: H * 0.06,
    marginLeft: 5,
    marginBottom: 3,
    marginTop: 3,
    borderWidth: 0.5,
    borderColor: "black"
  },

  wrapper: {},
  slide1: {
    width: W,
    height: H * 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
