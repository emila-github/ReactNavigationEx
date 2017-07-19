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
import SettingsScreen from '../screens/SettingsScreen';
import MyScreen from '../screens/MyScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: '/',
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
    Links: {
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
    Settings: {
      screen: SettingsScreen,
      path: '/settings',
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
    My: {
      screen: MyScreen,
      path: '/my',
    }
  },
  {

    navigationOptions: ({ navigation }) => ({
      tabBarLabel: () => {
        const { routeName } = navigation.state;
        return routeName;
      },
      // Set the tab bar icon
      tabBarIcon: ({ tintColor, focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Links':
            iconName = 'book';
            break;
          case 'My':
            iconName = 'egg';
            break;
          case 'Settings':
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
    tabBarPosition: 'bottom',
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: false,
    // Don't show the labels
    tabBarOptions: {
      // showLabel: false,
    },
  }
);
