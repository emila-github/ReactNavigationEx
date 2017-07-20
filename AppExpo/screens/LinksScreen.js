import React, { Component, PropTypes } from 'react';
import { ScrollView, Text, StyleSheet, Button } from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import RenderingScreens from '../../App/RenderingScreens';

class OtherScreen extends Component {
    render() {
			const navigation = this.props.navigation;
        return (
            <ScrollView>
                <Text>OtherScreen</Text>
								<Button
									onPress={() => {
										navigation.goBack(null);
									}}
									title="Go back"
								/>
            </ScrollView>
        );
    }
}

class MainScreen extends Component {

    render() {
        return (
            <ScrollView>
                <Text>LinksScreen</Text>
								<Button
									onPress = {
										() => this.props.navigation.navigate('RScreens', {
											user: 'Lucy'
										})
									}
									title = "To RenderingScreens" />
								<Button
									onPress = {
										() => this.props.navigation.navigate('Other', {
											user: 'Lucy2'
										})
									}
									title = "To OtherScreens" />
            </ScrollView>
        );
    }
}

const SimpleApp = StackNavigator({
	Home: {
		screen: MainScreen,
    navigationOptions: ({
      navigation
    }) => ({
      header: null
    }),
	},
	Other: {
		screen: OtherScreen,
	},
  // 使用 header:null 去掉StackNavigator的导航栏头部
  RScreens: {
    screen: RenderingScreens,
    navigationOptions: ({
      navigation
    }) => ({
      // header: null
    }),
  },

})


export default SimpleApp;
