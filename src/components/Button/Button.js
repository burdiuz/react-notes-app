/*
 * @flow
 */

import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import color from 'color';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const gradientColors = (baseColor) => {
  const darken = color(baseColor).darken(0.1).toString();
  return [darken, baseColor, darken];
};

const Button = (props) => {
  const {
    style,
    disabled,
    color,
    disabledColor,
    children,
    ...touchable
  } = props;
  return (
    <TouchableOpacity
      style={[styles.touchable, style]}
      {...touchable}>
      <LinearGradient
        colors={gradientColors(disabled && disabledColor || color)}
        style={styles.gradient}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
