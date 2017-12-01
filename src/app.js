import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm  from './components/LoginForm'


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyAp0s2wuxOz3dyuBQHm34AZED9CoLcIx2U",
        authDomain: "authentication-reac.firebaseapp.com",
        databaseURL: "https://authentication-reac.firebaseio.com",
        projectId: "authentication-reac",
        storageBucket: "authentication-reac.appspot.com",
        messagingSenderId: "619836024703"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
