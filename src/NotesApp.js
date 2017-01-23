/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  Navigator,
  BackAndroid,
} from 'react-native';
import * as routes from 'src/routes';

class NotesApp extends Component {
  static childContextTypes = {
    navigator: PropTypes.object
  };

  getChildContext() {
    return { navigator: this.refs.navigator };
  }

  currentRoute = null;
  state = {};

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._onBack);
  }

  componentDidMount() {
    this.setState({
      mounted: true, //reset context with navigator so I can use it deeply in the DOM
    });
  }

  _onBack = () => {
    if (this.currentRoute !== routes.list) {
      this.refs.navigator.pop();
      return true;
    }
    return false;
  };

  _renderScene = (route, navigator) => {
    this.currentRoute = route;
    return (
      <route.screen />
    );
  };

  render() {
    return (
      <Navigator
        ref='navigator'
        initialRoute={routes.list}
        renderScene={this._renderScene}>
      </Navigator>
    );
  }
}

export default NotesApp;
