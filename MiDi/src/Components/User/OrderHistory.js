import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView
} from "react-native";
import getOrderHistory from "../../API/getOrderHistory";
import getToken from "../../API/getToken";
import backSpecial from "../../media/back.png";

export default class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { arrOrder: [] };
  }

  componentDidMount() {
    getToken()
      .then(token => getOrderHistory(token))
      .then(arrOrder => this.setState({ arrOrder }))
      .catch(err => console.log(err));
  }

  goBackToMain() {}
  render() {
    const { body, orderRow, header, headerTitle, backIconStyle } = styles;
    return (
      <View style={body}>
        <View style={header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={backSpecial} style={backIconStyle} />
          </TouchableOpacity>
          <Text style={headerTitle}>Lịch sử mua hàng</Text>
        </View>
        <ScrollView>
          {this.state.arrOrder.map(e => (
            <View style={orderRow} key={e.id}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Mã đơn hàng:
                </Text>
                <Text style={{ color: "#2ABB9C" }}>ORD-{e.id}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Thời gian mua hàng:
                </Text>
                <Text style={{ color: "#C21C70" }}>{e.date_order}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Tổng tiền:
                </Text>
                <Text
                  style={{
                    color: "#C21C70",
                    fontWeight: "bold",
                    color: "rgba(231, 76, 60,1.0)"
                  }}
                >
                  {e.total} VNĐ
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Trạng thái:
                </Text>
                <Text
                  style={{
                    color: "#C21C70",
                    fontWeight: "bold",
                    color: "rgba(231, 76, 60,1.0)"
                  }}
                >
                  {e.status == 1 ? "Hoàn thành" : "Đang giao"}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  body: { flex: 1 },
  orderRow: {
    height: width / 3,
    backgroundColor: "white",
    margin: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#DFDFDF",
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: "space-around"
  },
  header: {
    flex: 0.1,
    backgroundColor: "#F23F1F",
    alignItems: "center",
    //justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10
  }, // eslint-disable-line
  headerTitle: { fontFamily: "Avenir", color: "#fff", fontSize: 20 },
  backIconStyle: { width: 30, height: 30, marginRight: 60 }
});
