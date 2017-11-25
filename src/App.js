import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './component/common';
import LoginForm from './component/LoginForm';


class App extends Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD_hhcurzfTzDnE9N3btq_baPN7k3CT90s',
      authDomain: 'authentication-5881d.firebaseapp.com',
      databaseURL: 'https://authentication-5881d.firebaseio.com',
      projectId: 'authentication-5881d',
      storageBucket: 'authentication-5881d.appspot.com',
      messagingSenderId: '844572797638'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
