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
      [{ text: "OK", onPress: this.back.bind(this) }],
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
    const { txtName, txtAddress, txtPhone } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            height: 70,
            width: 250
          }}
        >
          <Image source={require("../../media/mdr.png")} />
          <Text style={{ fontFamily: "Avenir", color: "orange", fontSize: 20, marginTop: 10 }}>Cập nhật thông tin</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.textInput}
            placeholder="Họ và tên"
            autoCapitalize="none"
            value={txtName}
            onChangeText={text =>
              this.setState({ ...this.state, txtName: text })}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Địa chỉ"
            autoCapitalize="none"
            value={txtAddress}
            onChangeText={text =>
              this.setState({ ...this.state, txtAddress: text })}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Điện thoại"
            autoCapitalize="none"
            value={txtPhone}
            onChangeText={text =>
              this.setState({ ...this.state, txtPhone: text })}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            style={styles.signInContainer}
            onPress={this.change.bind(this)}
          >
            <Text style={styles.signInTextStyle}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 30,
    marginRight: 20,
    marginLeft: 20,
    borderColor: "#F23F1F",
    borderWidth: 1
  },
  signInTextStyle: {
    fontFamily: "Avenir",
    color: "#fff",
    fontWeight: "400"
  },
  signInContainer: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 50,
    marginLeft: 50,
    backgroundColor: "#F23F1F"
  }
});
