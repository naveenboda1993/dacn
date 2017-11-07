import React from "react";
import {Dimensions} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import Home from "./Components/Home/Home";
import User from "./Components/User/User";
import Mall from "./Components/Mall/Mall";
import Search from "./Components/Search/Search";
import SearchHeader from "./Components/Search/SearchHeader";
import SanPhamNoiBat from "./Components/Home/SanPhamNoiBat";
const height = Dimensions.get("window");
export const HomeStack = StackNavigator(
  {
    ManHinh_Home: {
      screen: Home
    },
    ManHinh_SearchHeader: {
      screen: SearchHeader
    },
    ManHinh_Search: {
      screen: Search
    },
    ManHinh_SanPhamNoiBat:{
      screen: SanPhamNoiBat
    }
  },
  {
    headerMode: "SearchHeader"
  }
);
export const UserStack = StackNavigator({
  ManHinh_User: {
    screen: User
  }
});
export const MallStack = StackNavigator(
  {
    ManHinh_Mall: {
      screen: Mall
    },
    ManHinh_SearchHeader: {
      screen: SearchHeader
    },
    
    ManHinh_Search: {
      screen: Search
    }
  },
  {
    headerMode: "SearchHeader"
  }
);
export const Tabs = TabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="home" size={14} style={{ color: tintColor }} />
        )
      }
    },

    Mall: {
      screen: MallStack,
      navigationOptions: {
        tabBarLabel: "Mall",
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons
            name="handbag"
            size={14}
            style={{ color: tintColor }}
          />
        )
      }
    },

    User: {
      screen: UserStack,
      navigationOptions: {
        tabBarLabel: "Tôi",
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="user" size={14} style={{ color: tintColor }} />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom", // đưa tabBar xuống dưới, mặc định nó ở trên (android), ở dưới (ios)
    swipeEnables: true, // có thể kéo giữa các màn hình không cần bấm nút
    tabBarOptions: {
      style: {
        backgroundColor: "whitesmoke", //background tabBar
        height : height/15,
        margin:0
      },
      labelStyle: {
        margin:0
      },
      activeTintColor: "#F23F1F", //màu chữ khi được click
      inactiveTintColor: "#818085", //màu chữ khi không được click
      showIcon: true,
      upperCaseLabel: false
    }
  }
);
