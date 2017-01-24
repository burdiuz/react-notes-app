/*
 * @flow
 */

import React, { PropTypes } from 'react';
import {LinkButton} from 'src/components/Button';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';

const RightButton = ({
  style,
  onPress,
}) => {
  return (<LinkButton
    label=''
    underline={false}
    onPress={onPress}
    icon={(<Icon name='add-to-list' size={30} color='#fff'/>)}
    style={[styles.leftButton, style]}/>);
};

export default RightButton;
