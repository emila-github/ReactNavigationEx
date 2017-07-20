/**
 * @flow
 */

import React from 'react';
// import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom, Text } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import NavExScreen from '../screens/NavExScreen';
import MyScreen from '../screens/MyScreen';

export default TabNavigator(
  {
    RootHome: {
      screen: HomeScreen,
      path: '/home',
      navigationOptions: {
        // tabBarLabel: 'Home',
        /*tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),*/
      },
    },
    RootLinks: {
      screen: LinksScreen,
      path: '/links',
      navigationOptions: {
        // tabBarLabel: 'Home',
        /*tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),*/
      },
    },
    RootNavEx: {
      screen: NavExScreen,
      path: '/navEx',
      navigationOptions: {
        // tabBarLabel: 'Home',
        /*tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),*/
      },
    },
    RootMy: {
      screen: MyScreen,
      path: '/my',
    }
  },
  {

    navigationOptions: ({ navigation }) => ({
      tabBarLabel: () => {
        const { routeName } = navigation.state;
        return routeName.replace(/Root/g, '');
      },
      // Set the tab bar icon
      tabBarIcon: ({ tintColor, focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'RootHome':
            iconName = 'home';
            break;
          case 'RootLinks':
            iconName = 'book';
            break;
          case 'RootMy':
            iconName = 'egg';
            break;
          case 'RootNavEx':
            iconName = 'cog';
        }
        return (
          <Ionicons
            name={focused ? `ios-${iconName}` : `ios-${iconName}`}
            size={26}
            style={{ color: tintColor }}
          />
          /*<FontAwesome
            name={iconName}
            size={32}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />*/
        );
      },
    }),
    // Put tab bar on bottom of screen on both platforms
    tabBarComponent: TabBarBottom,
    // swipeEnabled: false,
    tabBarPosition: 'bottom',
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: false,
    // Don't show the labels
    tabBarOptions: {
      // showLabel: false,
    },
  }
);
