import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm  from './components/LoginForm'


class App extends Component {

  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyAp0s2wuxOz3dyuBQHm34AZED9CoLcIx2U",
        authDomain: "authentication-reac.firebaseapp.com",
        databaseURL: "https://authentication-reac.firebaseio.com",
        projectId: "authentication-reac",
        storageBucket: "authentication-reac.appspot.com",
        messagingSenderId: "619836024703"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
      return (
        <CardSection>
          <Button>
            Log Out
          </Button>
        </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        <Spinner size="large" />

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
