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
  const { label, icon, style, disabled, ...rest } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.touchable]}>
      <View style={styles.linkWrapper}>
        {icon || null}
        <Text style={[styles.text, styles.link, style]} {...rest}>{(`${label}`).toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LinkButton;
