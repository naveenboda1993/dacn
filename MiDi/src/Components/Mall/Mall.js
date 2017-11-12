import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import Header from "../Header";
import SignIn from "./ShoesMen";
import SignUp from "./ShoesWomen";

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { choose: true };
  }

  signIn() {
    this.setState({ choose: true });
  }

  signUp() {
    this.setState({ choose: false });
  }

  render() {
    const {
      container,
      controlStyle,
      shoesMenStyle,
      shoesWomenStyle,
      activeStyle,
      inactiveStyle
    } = styles;

    const { choose } = this.state;
    const mainJSX = choose ? <SignIn /> : <SignUp />;
    return (
      <View style={container}>
        <Header
          gotoSearch={() => {
            this.props.navigation.navigate("ManHinh_Search");
          }}
        />
        <View style={controlStyle}>
          <TouchableOpacity
            style={shoesMenStyle}
            onPress={this.signIn.bind(this)}
          >
            <Text style={choose ? activeStyle : inactiveStyle}>Giày nam</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={shoesWomenStyle}
            onPress={this.signUp.bind(this)}
          >
            <Text style={!choose ? activeStyle : inactiveStyle}>Giày nữ</Text>
          </TouchableOpacity>
        </View>
        {mainJSX}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  controlStyle: {
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "#F23F1F"
  },
  inactiveStyle: {
    color: "#D7D7D7"
  },
  activeStyle: {
    color: "#F23F1F"
  },
  shoesMenStyle: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 15,
    flex: 1,
    marginRight: 1
  },
  shoesWomenStyle: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    alignItems: "center",
    flex: 1,
    marginLeft: 1
  }
});
