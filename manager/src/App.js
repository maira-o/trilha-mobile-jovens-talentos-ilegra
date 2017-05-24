import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
