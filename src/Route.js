import React from "react";
import { StackNavigator, TabNavigator} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./Compoments/Home/Home";
import User from "./Compoments/User/User";
import Mall from "./Compoments/Mall/Mall";

export const HomeStack = StackNavigator({
  ManHinh_Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  ManHinh_Mall: {
    screen: Mall,
    navigationOptions: {
      title: "Mall"
    }
  },
  ManHinh_User: {
    screen: User,
    navigationOptions: {
      title: "Tôi"
    }
  }
});


export const Tabs = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcons name="home" size={20} style={{color: tintColor}}/>),
      }
    },

    Mall: {
      screen: Mall,
      navigationOptions: {
        tabBarLabel: "Mall",
        tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcons name="shopping" size={20} style={{color: tintColor}}/>),
      }
    },

    User:{
      screen: User,
      navigationOptions: {
        tabBarLabel: "Tôi",
        tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcons name="home" size={20} style={{color: tintColor}}/>),
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
			  }

			}
);