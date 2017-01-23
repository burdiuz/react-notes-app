/*
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Text, { Heading } from 'src/components/Text';

class ListItem extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
  };
  render() {
    const { label, style, onRemove, ...rest } = this.props;
    return (
      <View style={{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
        <TouchableHighlight
          activeOpacity={0.3}
          underlayColor='#00000011'
          style={[{
          flex:1,
          backgroundColor: '#fff',
          padding: 20,
        }, style]}
          {...rest}>
          <Text style={{flex: 1}}>{label}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.3}
          underlayColor='#fcc'
          style={{
          backgroundColor: '#00000011', // 11 is opacity, RGBA
          padding: 20,
        }}
          onPress={onRemove}>
          <Icon
            name='cross'
            size={30}
            color='#622' />
        </TouchableHighlight>
      </View>
    );
  }
}

export default ListItem;
