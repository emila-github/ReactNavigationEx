import React from 'react';
import { 
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HelloWorld from '../components/HomeScreen/BasiceTab/HelloWorld';

const BasicsExampleRoutes = {
  HelloWorld: {
    name: 'Hello World',
    description: 'Hello World!',
    screen: HelloWorld,
  },
};

const MyNavScreen = ({ navigation, banner, exampleRoutes = {} }) => (
  <ScrollView style={styles.container}>
    <Text>{banner}</Text>
    {Object.keys(exampleRoutes).map((routeName: string) => (
      <TouchableOpacity
        key={routeName}
        onPress={() => {
          const { path, params, screen } = exampleRoutes[routeName];
          const { router } = screen;
          const action = path && router.getActionForPathAndParams(path, params);
          navigation.navigate(routeName, {}, action);
        }}
      >
        <View style={styles.item}>
          <Text style={styles.title}>{exampleRoutes[routeName].name}</Text>
          <Text style={styles.description}>
            {exampleRoutes[routeName].description}
          </Text>
        </View>
      </TouchableOpacity>
    ))}

    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

const BasicsScreen = ({ navigation }) => (
  <MyNavScreen banner="Basics Tab" navigation={navigation} exampleRoutes={BasicsExampleRoutes} />
);

BasicsScreen.navigationOptions = {
  tabBarLabel: 'Basics',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const ComponentsScreen = ({ navigation }) => (
  <MyNavScreen banner="Components Tab" navigation={navigation} />
);

ComponentsScreen.navigationOptions = {
  tabBarLabel: 'Components',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const APIsScreen = ({ navigation }) => (
  <MyNavScreen banner="APIs Tab" navigation={navigation} />
);

APIsScreen.navigationOptions = {
  tabBarLabel: 'APIs',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};


const SimpleTabs = TabNavigator(
  {
    HomeBasics: {
      screen: BasicsScreen,
      // path: '',
    },
    HomeComponents: {
      screen: ComponentsScreen,
      // path: 'cart',
    },
    HomeAPIs: {
      screen: APIsScreen,
      // path: 'chat',
    }
  },
  {
    tabBarPosition: 'top',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      // showIcon: true,
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    },
  }
);


const SimpleApp = StackNavigator({
  // 使用 header:null 去掉StackNavigator的导航栏头部
  Home: {
    screen: SimpleTabs,
    navigationOptions: ({navigation, tintColor}) => ({
      header: null,
      // title: '17173',
      // headerTintColor: 'blue',
    }),
  },
  ...BasicsExampleRoutes,
})

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

export default SimpleApp;
