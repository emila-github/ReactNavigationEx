import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, ListView, Text } from 'react-native';


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ButtonBasics extends Component {
    constructor(props) {
        super(props);
        this.state = { movies: ds };
    }
    _getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        console.log('componentDidMount');
        this._getMoviesFromApiAsync().then((res) => {
            this.setState({ movies: this.state.movies.cloneWithRows(res) });
        });
    }

    render() {
        return (
            <ListView
                dataSource={this.state.movies}
                renderRow={(rowData) => <Text>{rowData.title}</Text>}
            />
        );
    }
}



const styles = StyleSheet.create({

})