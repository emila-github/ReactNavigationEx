/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './SampleText';

import MainScreenEx1 from './MainScreenEx1';
import MainScreenEx2 from './MainScreenEx2';

const MainTab = StackNavigator({
  Home: {
    screen: MainScreenEx1,
    path: '/',
    navigationOptions: {
      title: 'Welcome',
      header: null,
    },
  },
});

const SettingsTab = StackNavigator({
  Settings: {
    screen: MainScreenEx2,
    path: '/',
    navigationOptions: () => ({
      title: 'Settings',
    }),
  },
  NotifSettings: {
    screen: MainScreenEx2,
    navigationOptions: {
      title: 'Notifications',
    },
  },
});

const StacksInTabs = TabNavigator(
  {
    MainTab: {
      screen: MainTab,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SettingsTab: {
      screen: SettingsTab,
      path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Base',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
    }

  }
);

export default StacksInTabs;
