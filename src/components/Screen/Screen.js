/*
 * @flow
 */

import React from 'react';
import {
  View,
} from 'react-native';

import styles from './styles';

const Screen = (props) => {
  const { style, children, ...rest } = props;
  return (
    <View
      style={[styles.container, style]}
      {...rest}>
      {children}
    </View>
  );
};

export default Screen;
