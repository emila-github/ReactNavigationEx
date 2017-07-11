/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SampleText from './SampleText';

class MyNavScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <SampleText>{this.props.banner}</SampleText>
        <Button
          onPress={() => this.props.navigation.navigate('Profile', { name: 'Jane' })}
          title="Go to a profile screen"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Photos', { name: 'Jane' })}
          title="Go to a photos screen"
        />
        <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
      </ScrollView>
    );
  }
};

class MyHomeScreen extends React.Component {
 static navigationOptions = ({ navigation }) => {
   return {
     title: 'Welcome',
   };
 };
  render() {
    return (
      <MyNavScreen banner="Home Screen" navigation={this.props.navigation} />
    );
  }
};

class MyPhotosScreen extends React.Component {
 static navigationOptions = ({ navigation }) => {
   return {
     title: 'Welcome',
   };
 };
 render() {
   return (
     <MyNavScreen
       banner={`${this.props.navigation.state.params.name}'s Photos`}
       navigation={this.props.navigation}
           />
   );
 }
};

class MyProfileScreen extends React.Component {
 // Nav options can be defined as a function of the screen's props:
 static navigationOptions = ({ navigation }) => {
   const { state, setParams } = navigation;
   const { params } = state;
   return {
     headerTitle: `${params.name}'s Profile!`,
     // Render a button on the right side of the header.
     // When pressed switches the screen to edit mode.
     headerRight: (
       <Button
         title={params.mode === 'edit' ? 'Done' : 'Edit'}
         onPress={() =>
           setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
         />
     ),
   };
 };
 render() {
   return (
     <MyNavScreen
       banner={`${this.props.navigation.state.params.mode === 'edit' ? 'Now Editing ' : ''}${this.props.navigation.state.params.name}'s Profile`}
       navigation={this.props.navigation}
       />
   );
 }
};

const SimpleStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
  },
  Photos: {
    path: 'photos/:name',
    screen: MyPhotosScreen,
  },
});

export default SimpleStack;
