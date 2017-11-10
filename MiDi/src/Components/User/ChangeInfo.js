import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Alert
} from "react-native";
import backSpecial from "../../media/back.png";
import getToken from "../../API/getToken";
import changeInfoApi from "../../API/changeInfo";
import global from "../../Global";
export default class ChangeInfo extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props.navigation.state.params;
    this.state = {
      txtName: user.name,
      txtAddress: user.address,
      txtPhone: user.phone
    };
  }
  back() {
    this.props.navigation.navigate("ManHinh_User");
  }
  success() {
    Alert.alert(
      "Thông báo",
      "Cập nhật thông tin thành công",
      [
        {
          text: "OK",
          onPress: this.back.bind(this)
        }
      ],
      { cancelabel: false }
    );
  }
  change() {
    const { txtName, txtAddress, txtPhone } = this.state;
    getToken()
      .then(token => changeInfoApi(token, txtName, txtPhone, txtAddress))
      .then(user => {
        this.success();
        global.onSignIn(user);
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      wrapper,
      header,
      headerTitle,
      backIconStyle,
      body,
      signInContainer,
      signInTextStyle,
      textInput
    } = styles;
    const { txtName, txtAddress, txtPhone } = this.state;
    return (
      <View style={wrapper}>
        <View style={header}>
          <View />
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={backSpecial} style={backIconStyle} />
          </TouchableOpacity>
          <Text style={headerTitle}>Cập nhật thông tin</Text>
        </View>
        <View
          style={{
            marginTop: 50,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image source={require("../../media/mdr.png")} />
        </View>

        <View style={body}>
          <TextInput
            style={textInput}
            placeholder="Enter your name"
            autoCapitalize="none"
            value={txtName}
            onChangeText={text =>
              this.setState({ ...this.state, txtName: text })}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={textInput}
            placeholder="Enter your address"
            autoCapitalize="none"
            value={txtAddress}
            onChangeText={text =>
              this.setState({
                ...this.state,
                txtAddress: text
              })}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={textInput}
            placeholder="Enter your phone number"
            autoCapitalize="none"
            value={txtPhone}
            onChangeText={text =>
              this.setState({ ...this.state, txtPhone: text })}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            style={signInContainer}
            onPress={this.change.bind(this)}
          >
            <Text style={signInTextStyle}>Thay đổi</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  header: {
    flex: 1,
    backgroundColor: "#F23F1F",
    alignItems: "center",
    //justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10
  }, // eslint-disable-line
  headerTitle: { fontFamily: "Avenir", color: "#fff", fontSize: 20 },
  backIconStyle: { width: 30, height: 30, marginRight: 60 },
  body: { flex: 8, backgroundColor: "#fff", justifyContent: "center" },
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    fontFamily: "Avenir",
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: "#F23F1F",
    borderWidth: 1
  },
  signInTextStyle: {
    color: "#FFF",
    fontFamily: "Avenir",
    fontWeight: "600",
    paddingHorizontal: 20
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: "#F23F1F",
    borderRadius: 20,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch"
  },
  signInStyle: {
    flex: 3,
    marginTop: 50
  }
});
