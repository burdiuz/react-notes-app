/*
 * @flow
 */

import React from 'react';
import {
  Text as BaseText,
} from 'react-native';

import styles from './styles';

const Text = (props) => {
  const { children, style, ...rest } = props;
  return (
    <BaseText {...rest} style={[styles.text, style]}>
      {children}
    </BaseText>
  );
};

export default Text;
