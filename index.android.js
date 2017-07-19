/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './AppExpo/App'

export default class ReactNavigationEx extends Component {
  render() {
    return (
      <App></App>
    );
  }
}

AppRegistry.registerComponent('ReactNavigationEx', () => ReactNavigationEx);
