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

import List from 'src/screens/List';
import Add from 'src/screens/Add';
import Edit from 'src/screens/Edit';

const routes = [
  {
    index: 0,
    key: 'list',
    screen: List,
    title: 'Notes list',
  },
  {
    index: 1,
    key: 'add',
    screen: Add,
    title: 'Add new note',
  },
  {
    index: 2,
    key: 'edit',
    screen: Edit,
    title: 'Edit note',
  }
];

class NotesApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => (
          <route.screen/>
        )}>
      </Navigator>
    );
  }
}

export default NotesApp;
