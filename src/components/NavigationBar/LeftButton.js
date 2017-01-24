/*
 * @flow
 */

import React, { PropTypes } from 'react';
import {LinkButton} from 'src/components/Button';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';

const LeftButton = ({
  label,
  style,
  onPress,
}) => {
  return (<LinkButton
    label={label}
    underline={false}
    onPress={onPress}
    icon={(<Icon name='chevron-thin-left' size={30} color='#fff'/>)}
    style={[styles.leftButton, style]}/>);
};

export default LeftButton;
