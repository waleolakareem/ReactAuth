import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './component/common';
import firebase from 'firebase';


class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text> An App </Text>
      </View>
    );
  }
}

export default App;
