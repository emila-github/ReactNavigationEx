import React from 'react';
import { Button, Text, ScrollView, View } from 'react-native';
const HemoPage1 = ({ navigation }) => (
  <ScrollView>
    <Text>HemoPage1</Text>
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);
HemoPage1.navigationOptions = (props) => {
  const { navigation } = props;
  return {
    /*header: (
      <View>
        <Text>自定义header</Text>
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
      </View>
    ),*/
    headerTitle: 'headerTitle',
    title: 'Photos',
  }
};
export default HemoPage1;