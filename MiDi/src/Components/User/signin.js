import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image
} from 'react-native';
import signIn from '../../api/signIn';
import global from '../global';
import saveToken from '../../api/saveToken';
import { Tab,Tabbar } from '../route'

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSignIn() {
        const { email, password } = this.state;
        signIn(email, password)
            .then(res => {
                global.onSignIn(res.user);
                saveToken(res.token);
                this.Succes();
            })
            .catch(e => {
              this.Fail("Kiểm tra lại thông tin đăng nhập")
            });
    }

    goto(){
      this.props.navigation.navigate('SignUp');
    }

    redirect(){
      this.props.navigation.navigate('User');
    }

    Succes(){
      Alert.alert(
        "Notice",
        "Đăng nhập thành công",
        [
          {text: "OK", onPress: ()=>this.redirect()}
        ],
        {cancelable: false}
      )
    }

    Fail(notification){
      Alert.alert(
        "Notice",
        notification,
        [
          {text: "OK"}
        ],
        { cancelable: false }
      );
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { email, password } = this.state;
        return (
          <View style={{flex: 1,backgroundColor:'whitesmoke'}}>
            <View style={{alignSelf:'center',alignItems: 'center',flex: 1,justifyContent:'center',height: 70,width: 70}}>
              <Image
                source={require('../../media/sun.png')}
              />
              <Text style={{fontFamily:'Avenir',color: 'blue'}}>TVT Shop</Text>
            </View>
            <View style={{flex: 1}}>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={inputStyle}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    underlineColorAndroid='transparent'
                    style={inputStyle}
                    placeholder="Mật khẩu"
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={buttonText}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1, alignItems: 'center'}}>
              <Text style={{fontFamily:'Avenir',color: 'blue'}}>----------Chưa có tài khoản?-----------</Text>
              <TouchableOpacity onPress={()=>{this.goto()}}>
                <Text style={{fontFamily:'Avenir',color: 'blue'}}>Đăng ký ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom : 10,
        borderRadius: 20,
        paddingLeft: 30,
        marginRight : 20,
        marginLeft : 20,
        borderColor: 'blue',
        borderWidth: 1
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight : 50,
        marginLeft : 50,
        backgroundColor: 'rgba(231, 76, 60,1.0)',

    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});
