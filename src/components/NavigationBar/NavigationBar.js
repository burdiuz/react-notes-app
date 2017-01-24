/*
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  Text,
  Navigator,
} from 'react-native';

import Title from './Title';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

import styles from './styles';

const {
  NavigationBar:BaseNavBar,
} = Navigator;

const leftButtonDefaultRenderer = (index, onPress) => {
  return index ? (
      <LeftButton label='List' onPress={onPress} />
    ) : null;
};
const rightButtonDefaultRenderer = (index, onPress) => {
  return index ? null : (
      <RightButton onPress={onPress} />
    );
};
const titleDefaultRenderer = (route) => {
  return (
    <Title text={route.title} />
  );
}

class NavigationBar extends Component {

  static propTypes = {
    style: PropTypes.any,
    leftButtonRenderer: PropTypes.func,
    rightButtonRenderer: PropTypes.func,
    titleRenderer: PropTypes.func,
    navigator: PropTypes.object,
    navState: PropTypes.object,
    onLeftButtonPress: PropTypes.func,
    onRightButtonPress: PropTypes.func,
  };

  bar = null;

  // pass function calls to Navigator.NavigationBar
  updateProgress(...args) {
    return this.bar && this.bar.updateProgress(...args);
  }

  /*
   handleWillFocus(...args) {
   return this.bar && this.bar.handleWillFocus(...args);
   }

   onAnimationStart(...args) {
   return this.bar && this.bar.onAnimationStart(...args);
   }

   onAnimationEnd(...args) {
   return this.bar && this.bar.onAnimationEnd(...args);
   }
   */

  getRouteMapper() {
    return {
      LeftButton: this.renderLeftButton,
      RightButton: this.renderRightButton,
      Title: this.renderTitle,
    };
  }

  renderLeftButton = (route, navigator, index, navState) => {
    const buttonRenderer = this.props.leftButtonRenderer;
    if (buttonRenderer) {
      return buttonRenderer(route, navigator || this.props.navigator, index, navState);
    }
    return leftButtonDefaultRenderer(index, this.props.onLeftButtonPress);
  };

  renderRightButton = (route, navigator, index, navState) => {
    const buttonRenderer = this.props.rightButtonRenderer;
    if (buttonRenderer) {
      return buttonRenderer(route, navigator || this.props.navigator, index, navState);
    }
    return rightButtonDefaultRenderer(index, this.props.onRightButtonPress);
  };

  renderTitle = (route, navigator, index, navState) => {
    const handler = this.props.titleRenderer || titleDefaultRenderer;
    return handler(route, navigator || this.props.navigator, index, navState);
  };


  render() {
    const { navState, style } = this.props;
    return (
      <BaseNavBar
        ref={(ref) => this.bar = ref}
        navState={navState}
        routeMapper={this.getRouteMapper()}
        style={[styles.container, style]} />
    );
  }
}

export default NavigationBar;
