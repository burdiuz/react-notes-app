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
import NavigationBar from 'src/components/NavigationBar';
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
    if (this.currentRoute && this.currentRoute.id !== routes.list().id) {
      this.refs.navigator.popToTop();
      return true;
    }
    return false;
  };

  _onAddNewPress = () => {
    this.refs.navigator.push(routes.add());
  };

  _renderScene = (route, navigator) => {
    this.currentRoute = route;
    return (
      <route.screen />
    );
  };

  renderNavigationBar() {
    return (
      <NavigationBar
        onLeftButtonPress={this._onBack}
        onRightButtonPress={this._onAddNewPress}
      />
    );
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        initialRoute={routes.list()}
        renderScene={this._renderScene}
        navigationBar={this.renderNavigationBar()}>
      </Navigator>
    );
  }
}

export default NotesApp;
