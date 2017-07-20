import React, { Component, PropTypes } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import AppNavigator from '../../App/App';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Banner from '../../App/Banner';
import CustomTabs from '../../App/CustomTabs';
import Drawer from '../../App/Drawer';
import TabsInDrawer from '../../App/TabsInDrawer';
import ModalStack from '../../App/ModalStack';
import StacksInTabs from '../../App/StacksInTabs';
import StacksOverTabs from '../../App/StacksOverTabs';
import SimpleStack from '../../App/SimpleStack';
import SimpleTabs from '../../App/SimpleTabs';

import SimpleStackES6 from '../../App/SimpleStackES6';
import RenderingScreens from '../../App/RenderingScreens';

const ExampleRoutes = {
  SimpleStack: {
    name: 'Stack Example',
    description: 'A card stack',
    screen: SimpleStack,
  },
  SimpleStackES6: {
    name: 'Stack Example ES6',
    description: 'A card stack',
    screen: SimpleStackES6,
  },
  RenderingScreens: {
    name: 'RenderingScreens',
    description: 'Rendering screens with Navigators',
    screen: RenderingScreens,
  },
  SimpleTabs: {
    name: 'Tabs Example',
    description: 'Tabs following platform conventions',
    screen: SimpleTabs,
  },
  Drawer: {
    name: 'Drawer Example',
    description: 'Android-style drawer navigation',
    screen: Drawer,
  },
  TabsInDrawer: {
    name: 'Drawer + Tabs Example',
    description: 'A drawer combined with tabs',
    screen: TabsInDrawer,
  },
  CustomTabs: {
    name: 'Custom Tabs',
    description: 'Custom tabs with tab router',
    screen: CustomTabs,
  },
  ModalStack: {
    name: Platform.OS === 'ios'
      ? 'Modal Stack Example'
      : 'Stack with Dynamic Header',
    description: Platform.OS === 'ios'
      ? 'Stack navigation with modals'
      : 'Dynamically showing and hiding the header',
    screen: ModalStack,
  },
  StacksInTabs: {
    name: 'Stacks in Tabs',
    description: 'Nested stack navigation in tabs',
    screen: StacksInTabs,
  },
  StacksOverTabs: {
    name: 'Stacks over Tabs',
    description: 'Nested stack navigation that pushes on top of tabs',
    screen: StacksOverTabs,
  },
  LinkStack: {
    name: 'Link in Stack',
    description: 'Deep linking into a route in stack',
    screen: SimpleStack,
    path: 'people/Jordan',
  },
  LinkTabs: {
    name: 'Link to Settings Tab',
    description: 'Deep linking into a route in tab',
    screen: SimpleTabs,
    path: 'settings',
  },
};

const MainScreen = ({ navigation }) => (
  <ScrollView>
    <Banner />
    {Object.keys(ExampleRoutes).map((routeName: string) => (
      <TouchableOpacity
        key={routeName}
        onPress={() => {
          const { path, params, screen } = ExampleRoutes[routeName];
          const { router } = screen;
          const action = path && router.getActionForPathAndParams(path, params);
          navigation.navigate(routeName, {}, action);
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

const SN = StackNavigator({
  NavEx: {
    screen: MainScreen,
    path: '/navEx/',
    navigationOptions: {
      title: 'Welcome navEx',
      header: null,
    },
  },
	...ExampleRoutes,
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
