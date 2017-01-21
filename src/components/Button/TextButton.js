/*
 * @flow
 */

import React from 'react';
import Button from './Button';
import Text from 'src/components/Text';

import styles from './styles';

const TextButton = (props) => {
  const { label, textStyle, ...rest } = props;
  return (
    <Button {...rest}>
      <Text style={[styles.text, textStyle]}>{(`${label}`).toUpperCase()}</Text>
    </Button>
  );
};

export default TextButton;
