import React, { Component } from "react";
import {
  ListView, View, TouchableOpacity, Text, Image
} from "react-native";



export default class Test extends Component {

  constructor(props){
    super(props);
    this.state={
                 container: <View>
                   <Text>aaaaaaaaaaaaaa</Text>
                   <Text>aaaaaaaaaaaaaa</Text>
                   <Text>aaaaaaaaaaaaaa</Text>
                   <Text>aaaaaaaaaaaaaa</Text>
                   <Text>aaaaaaaaaaaaaa</Text>
                   <Text>aaaaaaaaaaaaaa</Text>
                 </View>,
               }
  }
  _search(){
    this.setState({
      container: 
      <View>
        <Text>lich su ne</Text>
      </View>
    })
  }
  render() {
    return <View>
        <TouchableOpacity onPress={() => {
            this._search();
          }}>
          <Text>sff</Text>
        </TouchableOpacity>
        {this.state.container}
      </View>;
  }
}
