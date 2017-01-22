/*
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';
import Text from 'src/components/Text';
import Screen from 'src/components/Screen';

class Edit extends Component {

  static propTypes = {
  };

  componentWillMount() {
  }

  render() {
    return (
      <Screen>
        <Text>Edit note screen!</Text>
      </Screen>
    );
  }
}

export default Edit;
