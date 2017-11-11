import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const url = "http://192.168.56.1:8080/api/images/type/";
import initData from "../../API/initData";

var H = Dimensions.get("window").height;
var W = Dimensions.get("window").width;
export default class ThuongHieu extends Component {
  constructor(props) {
    super(props);
    this.state = { types: [] };
  }
  componentDidMount() {
    initData().then(resJSON => {
      console.log(resJSON);
      const { type } = resJSON;
      this.setState({ types: type });
    });
  }

  render() {
    const { types } = this.state;
    return <View>
        <View style={{ backgroundColor: "#FF5722", height: H * 0.01, marginBottom: 5 }} />
        <View style={{ height: H * 0.18 }}>
          <Text style={{ color: "#FF5722", marginLeft: 8, fontFamily: "Avenir", fontSize: 16 }}>
            Thương hiêu ưa chuộng
          </Text>

          <ScrollView horizontal contentContainerStyle={styles.contentContainer} showsHorizontalScrollIndicator={false}>
            {types.map(e => (
              <TouchableOpacity
              onPress={() => this.props.gotoListProduct(e)}
                key={e.id}
              >
                <Image
                  source={{
                    uri: `${url}${e.image}`
                  }}
                  style={styles.imgthuonghieu}
                />
              </TouchableOpacity>
            ))}
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
    width: W * 0.3,
    height: H * 0.1,
    marginLeft: 5,
    marginBottom: 3,
    marginTop: 6,
    borderWidth: 1,
    borderColor: "whitesmoke"
  }
});
