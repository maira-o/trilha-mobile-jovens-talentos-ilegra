import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDEKPMU9jGmTwLJwREjH_MzqWKPKwknHgc",
      authDomain: "manager-b1638.firebaseapp.com",
      databaseURL: "https://manager-b1638.firebaseio.com",
      projectId: "manager-b1638",
      storageBucket: "manager-b1638.appspot.com",
      messagingSenderId: "37426985880"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
