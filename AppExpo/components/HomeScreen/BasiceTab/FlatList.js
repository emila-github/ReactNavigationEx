import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
    render() {
        const datas = [
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
        ];
        for(let i = 0, len = 300; i < len; i++) {
            datas.push({
               key: `wcj${i}`
            });
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={datas}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})