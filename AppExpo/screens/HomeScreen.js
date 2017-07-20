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
import { TabNavigator, StackNavigator } from 'react-navigation';``
import Ionicons from 'react-native-vector-icons/Ionicons';

import HelloWorld from '../components/HomeScreen/BasiceTab/HelloWorld';
import Props from '../components/HomeScreen/BasiceTab/Props';
import State from '../components/HomeScreen/BasiceTab/State';
import Style from '../components/HomeScreen/BasiceTab/Style';
import HeightAndWidth from '../components/HomeScreen/BasiceTab/HeightAndWidth';

const BasicsExampleRoutes = {
  HelloWorld: {
    name: 'Hello World',
    description: 'Hello World!',
    screen: HelloWorld,
  },
  Props: {
    name: 'Props',
    description: '大多数组件在创建时就可以使用各种参数来进行定制。用于定制的这些参数就称为props（属性）。',
    screen: Props,
  },
  State: {
    name: 'State',
    description: '我们使用两种数据来控制一个组件：props和state。props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。 对于需要改变的数据，我们需要使用state。',
    screen: State,
  },
  Style: {
    name: 'Style',
    description: '所有的核心组件都接受名为style的属性。这些样式名基本上是遵循了web上的CSS的命名，只是按照JS的语法要求使用了驼峰命名法，例如将background-color改为backgroundColor',
    screen: Style,
  },
  HeightAndWidth: {
    name: 'Height and Width',
    description: '高度与宽度,React Native中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点',
    screen: HeightAndWidth,
  },
};

// Object.keys(BasicsExampleRoutes).map(routeName => {
//   BasicsExampleRoutes[routeName].navigationOptions = {
//     title: BasicsExampleRoutes[routeName]['name']
//   };
// });

const MyNavScreen = ({ navigation, banner, exampleRoutes = {} }) => (
  <ScrollView style={styles.container}>
    {/*<Text>{banner}</Text>*/}
    {Object.keys(exampleRoutes).map((routeName: string) => (
      <TouchableOpacity
        key={routeName}
        onPress={() => {
          const { path, params, screen } = exampleRoutes[routeName];
          const { router } = screen;
          const action = path && router.getActionForPathAndParams(path, params);
          exampleRoutes[routeName].navigationOptions = {
            title: exampleRoutes[routeName]['name']
          }
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

    {/*<Button onPress={() => navigation.goBack(null)} title="Go back" />*/}
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
