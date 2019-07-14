import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Home from "../components/home/home";

const Root = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: {
      header: null
    }
}});


export default createAppContainer( 
  Root  
);