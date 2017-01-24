/*
 * @flow
 */

import React, { PropTypes } from 'react';
import {
  View,
} from 'react-native';
import Button from 'src/components/Button';

// import styles from './styles';

const ButtonsBlock = ({
  onSaveAndList,
  onSaveAndNew,
  disabled,
}) => (
  <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
    <Button
      label='Save'
      onPress={onSaveAndList}
      disabled={disabled}
      style={{
        flex: 0.5,
        paddingTop: 10,
        paddingRight: 5,
      }} />
    <Button
      label='Save & New'
      onPress={onSaveAndNew}
      disabled={disabled}
      style={{
        flex: 0.5,
        paddingTop: 10,
        paddingLeft: 5,
      }} />
  </View>
);

ButtonsBlock.propTypes = {
  onSaveAndList: PropTypes.func.isRequired,
  onSaveAndNew: PropTypes.func.isRequired,
};

export default ButtonsBlock;
