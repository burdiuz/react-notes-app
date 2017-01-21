/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import AddScreen from 'src/screens/Add';

class NotesApp extends Component {
  render() {
    return (
      <AddScreen />
    );
  }
}

export default NotesApp;
