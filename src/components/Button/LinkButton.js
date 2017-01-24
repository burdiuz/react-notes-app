/*
 * @flow
 */

import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Text from 'src/components/Text';

import styles from './styles';

const LinkButton = (props) => {
  const { label, icon, style, disabled, onPress, underline, ...rest } = props;
  const wrapperStyle = underline || underline === undefined ? [styles.linkWrapper, styles.linkUnderline] : styles.linkWrapper;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.touchable]}>
      <View style={wrapperStyle}>
        {icon || null}
        <Text style={[styles.text, styles.link, style]} {...rest}>{(`${label}`).toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LinkButton;
