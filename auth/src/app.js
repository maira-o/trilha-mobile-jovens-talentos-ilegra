import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyB5NLR29FvCgdc5TEZZtua4fs7im-TW97M',
        authDomain: 'authentication-1c498.firebaseapp.com',
        databaseURL: 'https://authentication-1c498.firebaseio.com',
        projectId: 'authentication-1c498',
        storageBucket: 'authentication-1c498.appspot.com',
        messagingSenderId: '952425901003'
    });
  }

  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
