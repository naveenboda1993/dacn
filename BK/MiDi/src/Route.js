import React from "react";
import { StackNavigator, TabNavigator} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Home from "./Components/Home/Home";
import User from "./Components/User/User";
import Mall from "./Components/Mall/Mall";

export const HomeStack = StackNavigator({
  ManHinh_Home: {
    screen: Home
  },
  ManHinh_Mall: {
    screen: Mall
  },
  ManHinh_User: {
    screen: User
  }
},
);


export const Tabs = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (<SimpleLineIcons name="home" size={20} style={{color: tintColor}}/>),
      }
    },

    Mall: {
      screen: Mall,
      navigationOptions: {
        tabBarLabel: "Mall",
        tabBarIcon: ({ tintColor }) => (<SimpleLineIcons name="handbag" size={20} style={{color: tintColor}}/>),
      }
    },

    User:{
      screen: User,
      navigationOptions: {
        tabBarLabel: "Tôi",
        tabBarIcon: ({ tintColor }) => (<SimpleLineIcons name="user" size={20} style={{color: tintColor}}/>),
      }
    }
  },
  {
		tabBarPosition:'bottom',		// đưa tabBar xuống dưới, mặc định nó ở trên (android), ở dưới (ios)
		swipeEnables: true,			// có thể kéo giữa các màn hình không cần bấm nút
		tabBarOptions:{
      style:{
        backgroundColor:"#F9F9F9"		//background tabBar
      },
      activeTintColor:"#F23F1F",		//màu chữ khi được click
      inactiveTintColor:'#818085',	//màu chữ khi không được click
      showIcon: true,
      upperCaseLabel: false
    },
	}
);