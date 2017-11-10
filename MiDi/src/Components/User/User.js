import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const { width, height } = Dimensions.get("window");
import global from "../../Global";
import getToken from "../../API/getToken";
import checkLogin from "../../API/checkLogin";
import saveToken from "../../API/saveToken";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    global.onSignIn = this.onSignIn.bind(this);
  }

  componentDidMount() {
    getToken()
      .then(token => checkLogin(token))
      .then(res => global.onSignIn(res.user))
      .catch(err => console.log("LOI CHECK LOGIN", err));
  }

  onSignIn(user) {
    this.setState({ user });
  }

  goToSignIn() {
    const { navigate } = this.props.navigation;
    navigate("SignIn");
  }
  goToSinUp() {
    const { navigate } = this.props.navigation;
    navigate("SignUp");
  }
  goContact() {
    this.props.navigation.navigate("Contact");
  }
  signOut() {
    this.setState({ user: null });
    saveToken("");
    this.props.navigation.navigate("User");
  }
  goOrderHistory() {
    this.props.navigation.navigate("OrderHistory");
  }
  goUserDetail() {
    const { user } = this.state;
    this.props.navigation.navigate("ManHinh_ChangeInfo", { user });
  }

  render() {
    const { user } = this.state;
    const logoutJSX = (
      <View>
        <View>
          <ImageBackground
            source={require("../../media/32.jpg")}
            style={styles.imwrap}
            resizeMode="cover"
          >
            <View style={styles.user}>
              <Image
                source={require("../../media/Contacts-104.png")}
                style={styles.ava}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate("ManHinh_SignIn");
                }}
              >
                <Text style={styles.text}>Đăng nhập</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonn}
                onPress={() => {
                  this.props.navigation.navigate("ManHinh_SignUp");
                }}
              >
                <Text style={styles.text}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.touch}>
            <Text
              style={{
                fontFamily: "Avenir",
                color: "#F23F1F",
                fontSize: 15
              }}
            >
              Trung tâm trợ giúp
            </Text>
            <Image
              source={require("../../media/next.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.goContact();
            }}
          >
            <Text
              style={{
                fontFamily: "Avenir",
                color: "#F23F1F",
                fontSize: 15
              }}
            >
              Thông tin shop
            </Text>
            <Image
              source={require("../../media/next.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );

    const loginJSX = (
      <View>
        <View>
          <ImageBackground
            source={require("../../media/32.jpg")}
            style={styles.imwrap}
            resizeMode="cover"
          >
            <View style={styles.user}>
              <Image
                source={require("../../media/Contacts-104.png")}
                style={styles.ava}
              />
              <Text style={styles.name}>Chào, {user ? user.name : ""}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.goUserDetail();
            }}
          >
            <Text
              style={{
                fontFamily: "Avenir",
                color: "#F23F1F",
                fontSize: 15
              }}
            >
              Tài khoản của tôi
            </Text>
            <Image
              source={require("../../media/next.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.goOrderHistory();
            }}
          >
            <Text
              style={{
                fontFamily: "Avenir",
                color: "#F23F1F",
                fontSize: 15
              }}
            >
              Lịch sử mua hàng
            </Text>
            <Image
              source={require("../../media/next.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.signOut();
            }}
          >
            <Text
              style={{
                fontFamily: "Avenir",
                color: "#F23F1F",
                fontSize: 15
              }}
            >
              Đăng xuất
            </Text>
            <Image
              source={require("../../media/cancel.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity style={styles.touch}>
            <Text
              style={{
                fontFamily: "Avenir",
                color: "#F23F1F",
                fontSize: 15
              }}
            >
              Trung tâm trợ giúp
            </Text>
            <Image
              source={require("../../media/next.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              this.goContact();
            }}
          >
            <Text
              style={{
                fontFamily: "Avenir",
                color: "#F23F1F",
                fontSize: 15
              }}
            >
              Thông tin shop
            </Text>
            <Image
              source={require("../../media/next.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );

    const mainJSX = this.state.user ? loginJSX : logoutJSX;
    return <View>{mainJSX}</View>;
  }
}

const styles = StyleSheet.create({
  name: {
    fontSize: 17,
    marginLeft: 20,
    color: "white",
    fontFamily: "Avenir"
  },
  imwrap: {
    height: height / 4,
    width: width
  },
  button: {
    height: 25,
    backgroundColor: "#F23F1F",
    borderRadius: 5,
    width: 70,
    marginLeft: 20,
    justifyContent: "center",
    paddingLeft: 1,
    alignItems: "center",
    borderColor: "black"
    // marginTop: 20,
  },
  buttonn: {
    height: 25,
    backgroundColor: "transparent",
    borderRadius: 5,
    width: 70,
    // marginTop: 40,
    marginLeft: 10,
    justifyContent: "center",
    paddingLeft: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white"
  },
  text: {
    fontSize: 12,
    color: "white",
    fontFamily: "Avenir"
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
    marginLeft: 40
  },
  ava: {
    flexDirection: "row",
    alignItems: "center",
    width: 60,
    height: 60,
    marginLeft: 20,
    borderRadius: 60
  },
  icons: {
    marginTop: 20,
    width: 30,
    height: 30,
    marginRight: 5
  },
  touch: {
    marginTop: 1,
    backgroundColor: "white",
    padding: height / 50,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    width: 20,
    height: 20
  }
});

export default User;
