import React, { Component, PropTypes } from 'react';
import { 
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import SimpleStack from '../../App/SimpleStack';
import HomePage1 from '../components/HomePage1';

const ExampleRoutes = {
	HomePage1: {
    name: 'HomePage1',
    description: 'HomePage1',
    screen: HomePage1,
	},
  SimpleStack: {
    name: 'Stack Example',
    description: 'A card stack',
    screen: SimpleStack,
  },

};



class HomeScreen extends Component {
	render() {
		return (
			<ScrollView>
				<Text>HomeScreen</Text>
				{Object.keys(ExampleRoutes).map((routeName: string) => (
					<TouchableOpacity
						key={routeName}
						onPress={() => {
							const { path, params, screen } = ExampleRoutes[routeName];
							const { router } = screen;
							const action = path && router.getActionForPathAndParams(path, params);
							this.props.navigation.navigate(routeName, {}, action);
						}}
					>
						<View style={styles.item}>
							<Text style={styles.title}>{ExampleRoutes[routeName].name}</Text>
							<Text style={styles.description}>
								{ExampleRoutes[routeName].description}
							</Text>
						</View>
					</TouchableOpacity>
				))}				
			</ScrollView>
		);
	}
}

const SN = StackNavigator({
		Home: {
			screen: HomeScreen,
			path: '/'
		},
		...ExampleRoutes,
	},
  {
    navigationOptions: () => ({
			title: 'home',
			// header: (
			// 	<View></View>
			// ),
      // header: null,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  });
export default SN;


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});