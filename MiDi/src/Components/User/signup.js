import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image
} from "react-native";
import register from "../../API/register";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      address: "",
      phone: ""
    };
  }

  Success() {
    Alert.alert(
      "Thông báo",
      "Đăng ký thành công",
      [
        {
          text: "OK",
          onPress: () => this.props.navigation.navigate("ManHinh_SignIn")
        }
      ],
      { cancelable: false }
    );
  }

  Fail(notification) {
    Alert.alert(
      "Thông báo",
      notification,
      [{ text: "OK", onPress: () => this.removeEmail() }],
      { cancelable: false }
    );
  }

  removeEmail() {
    this.setState({ email: "" });
  }

  registerUser() {
    const { name, email, password, address, phone } = this.state;
    register(email, name, password, address, phone).then(res => {
      if (res === "THANH_CONG") return this.Success();
      else if (res === "KHONG_THANH_CONG") return this.Fail("Không được để trống");
      this.Fail("Email đã được sử dụng");
    });
  }

  render() {
    const { inputStyle, bigButton, buttonText } = styles;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            height: 30,
            width: 30
          }}
        >
          <Image source={require("../../media/mdr.png")} />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            underlineColorAndroid="transparent"
            style={inputStyle}
            placeholder="Họ tên"
            value={this.state.name}
            onChangeText={text => this.setState({ name: text })}
          />
          <TextInput
            underlineColorAndroid="transparent"
            style={inputStyle}
            placeholder="Email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            underlineColorAndroid="transparent"
            style={inputStyle}
            placeholder="Mật khẩu"
            value={this.state.password}
            secureTextEntry
            onChangeText={text => this.setState({ password: text })}
          />
          <TextInput
            underlineColorAndroid="transparent"
            style={inputStyle}
            placeholder="Địa chỉ"
            value={this.state.address}
            onChangeText={text => this.setState({ address: text })}
          />
          <TextInput
            underlineColorAndroid="transparent"
            style={inputStyle}
            placeholder="Điện thoại"
            value={this.state.phone}
            onChangeText={text => this.setState({ phone: text })}
          />
          <TouchableOpacity
            style={bigButton}
            onPress={this.registerUser.bind(this)}
          >
            <Text style={buttonText}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}/>
        <View style={{ flex: 1 }}/>
        <View style={{ flex: 1}}/>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontFamily: "Avenir", color: "black" }}>
            ---------- Đã có tài khoản? -----------
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("ManHinh_SignIn");
            }}
          >
            <Text style={{ fontFamily: "Avenir", color: "#F23F1F" }}>
              Đăng nhập ngay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
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
  bigButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 50,
    marginLeft: 50,
    backgroundColor: "#F23F1F"
  },
  buttonText: {
    fontFamily: "Avenir",
    color: "#fff",
    fontWeight: "400"
  }
});
