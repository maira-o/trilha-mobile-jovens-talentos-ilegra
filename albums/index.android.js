// Index.android.js - place coide in here for Android!!!

// Import a library to help crate a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => (
    <Header />
);

// Render it to device
AppRegistry.registerComponent('albums', () => App);
